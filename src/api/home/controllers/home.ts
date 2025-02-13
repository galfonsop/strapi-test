// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::home.home', ({ strapi }) => ({
//   async find(ctx) {
//     try {
//       // Configurar la query para poblar todo
//       ctx.query = {
//         ...ctx.query,
//         populate: {
//             blocks: {
//               on: {
//                 'hispasat.incidences-list': {
//                   populate: {
//                     incidences: {
//                       populate: '*',
//                     },
//                   },
//                 },
//               },
//             },
//           },
//       };

//       // Llamar al método find original
//       const { data, meta } = await super.find(ctx);
//       console.log('data: ', data)

//       // Retornar la respuesta modificada con bloques procesados
//       return { data, meta };
//     } catch (error) {
//       // Log del error para depuración
//       console.error('Error en el controlador find:', error);
//       ctx.throw(500, 'Error interno en el servidor');
//     }
//   },
// }));

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::home.home",
  ({ strapi }) => ({
    async find(ctx) {
      try {
        // Obtener el esquema del tipo de contenido
        const contentType = strapi.contentTypes["api::home.home"];
        // console.dir(contentType.attributes, { depth: Infinity });
        // Generar automáticamente la configuración `populate` para todas las Dynamic Zones
        const populateConfig = {
          blocks: {
            on: {
              "hispasat.slide-list": {
                populate: {
                  slides: {
                    populate: "*",
                  },
                },
              },
              "hispasat.incidences-list": {
                populate: "*",
              },
              "hispasat.news-list": {
                populate: {
                  news: {
                    populate: "*",
                  },
                  grid: {
                    populate: "*",
                  },
                },
              },
              "hispasat.applications-list": {
                populate: "*",
              },
              "hispasat.shortcut-list": {
                populate: "*",
              },
              "hispasat.pro-dev-list": {
                populate: "*",
              },
            },
          },
        };
        // for (const attributeName in contentType.attributes) {
        //   const attribute = contentType.attributes[attributeName];
        //   if (attribute.type === "dynamiczone") {
        //     // Poblar todos los componentes de la Dynamic Zone
        //     populateConfig[attributeName] = {
        //       on: attribute.components.reduce((acc, component) => {
        //         console.log("component", acc, component);
        //         acc[component] = { populate: "*" }; // Poblar todos los campos del componente
        //         return acc;
        //       }, {}),
        //     };
        //   }
        //   // console.dir(populateConfig, { depth: Infinity });
        // }

        // Aplicar el `populate` dinámico a la query
        ctx.query = {
          ...ctx.query,
          populate: {
            ...populateConfig,
          },
        };
        return await super.find(ctx);
      } catch (error) {
        console.error("Error en el controlador find:", error);
        ctx.throw(500, "Error interno en el servidor");
      }
    },
  })
);
