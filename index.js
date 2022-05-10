const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

//documentation de l'API REST avec Swagger
const options = {
    definition: {
      info: {
        title: 'Gestion des Notes API',
        description: "L'API REST du projet Gestion des notes",
        version: '1.0',
      },
      servers: ["http://localhost:3001"]
    },
    apis: ['./routes/*.js'], // files containing annotations as above
  };

const swaggerDocs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//importation des routes
const etuRoutes = require('./routes/etu');
const adminRoutes = require('./routes/admin');
const ensRoutes = require('./routes/ens');

app.use(cors());


app.use(bodyParser.json());

app.use('', etuRoutes);
app.use('', adminRoutes);
app.use('', ensRoutes);


app.listen(3001, () => console.log('Server started ...'));
