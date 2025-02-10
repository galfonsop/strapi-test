export default (config, { strapi }) => {
    return async (ctx, next) => {
      // Obtener el nombre del tipo de contenido de la ruta
      const modelName = ctx.request.url.split('/')[2]?.split('?')[0];
  
      if (!modelName) {
        return next();
      }
  
      // Obtener el esquema del modelo
      const contentType = strapi.contentTypes[`api::${modelName}.${modelName}`];
  
      if (!contentType) {
        return next();
      }
  
      // Verificar si el modelo tiene Dynamic Zones
      const populateConfig = {};
      for (const attributeName in contentType.attributes) {
        const attribute = contentType.attributes[attributeName];
        if (attribute.type === 'dynamiczone') {
          populateConfig[attributeName] = {
            on: attribute.components.reduce((acc, component) => {
              acc[component] = { populate: '*' };
              return acc;
            }, {}),
          };
        }
      }
  
      // Añadir el `populate` a la query si hay Dynamic Zones
      if (Object.keys(populateConfig).length > 0) {
        ctx.query = {
          ...ctx.query,
          populate: {
            ...ctx.query.populate,
            ...populateConfig,
          },
        };
      }
  
      await next();
    };
  };
  