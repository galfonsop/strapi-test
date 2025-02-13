/**
 *  global controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::global.global",
  ({ strapi }) => ({
    async find(ctx) {
      try {
        const populateConfig = {
          menu: {
            populate: {
              items: {
                populate: "*",
              },
            },
          },
          footer: {
            populate: {
              blocks: {
                populate: "*",
              },
              social_logos: {
                populate: "*",
              },
              certification_logos: {
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
