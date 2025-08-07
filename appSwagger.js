const swaggerjsdoc = require('swagger-jsdoc');
const swaggeroptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Aldallah Open Source Community API",
            version: "1.0.0",
            description: "Aldallah Open Source Community API documentation",
        },
        servers: [
            {
                // url: "https://oosc-edu-be.vercel.app",
                description: "Production server",
            },
            {
                url: "http://localhost:3715",
                description: "Local server",
            }
        ],

    },

    apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerjsdoc(swaggeroptions);
// console.log(swaggerSpec);
module.exports = swaggerSpec;