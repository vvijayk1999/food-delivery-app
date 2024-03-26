require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swaggerDef');

const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// OpenAPI
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use('/api', deliveryRoutes);

app.get('/', (req, res) => {
  // res.send('Food Delivery App Backend!');
  res.status(301).redirect('/api-docs');
});

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: message });
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
