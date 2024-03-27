const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Food Delivery App API',
    version: '1.0.0',
    description: 'This is the API documentation for the Food Delivery App.',
  },
  servers: [
    {
      url: 'https://food-delivery-app-5fyj.onrender.com/',
      description: 'Production server',
    },
    {
      url: 'http://localhost:3000/',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
