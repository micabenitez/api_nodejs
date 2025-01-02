import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Documentacion API Nodejs",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(options);

export { specs };