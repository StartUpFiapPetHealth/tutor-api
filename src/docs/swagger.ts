import swaggerUi from 'swagger-ui-express';
import swaggerJson from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "Tutor API Documentation",
          version: "1.0.0",
          description: "Documentation for Tutor API",
        },
        servers: [
          {
            url: "http://localhost:3000",
            description: "Development Server"
          },
        ],
      }
      ,
      apis: ["src/routes/tutorRouter.ts", "routes/tutorRouter.js"]
    };

const swaggerDoc = swaggerJson(swaggerOptions);

export {swaggerDoc, swaggerUi}
