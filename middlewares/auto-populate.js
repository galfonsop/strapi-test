module.exports = (config, { strapi }) => {
  console.log('Middleware auto-populate cargado');
  return async (ctx, next) => {
    const modelName = ctx.request.url.split('/')[2]?.split('?')[0];

    if (!modelName) {
      return next();
    }

    const contentType = strapi.contentTypes[`api::${modelName}.${modelName}`];

    if (!contentType) {
      return next();
    }

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
