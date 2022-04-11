const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require('cors');
const app = express();


//importation des routes
const etuRoutes = require('./routes/etu');
const adminRoutes = require('./routes/admin');
const ensRoutes = require('./routes/ens');

app.use(cors());


app.use(bodyParser.json());

app.use('/api/', etuRoutes);
app.use('/api/', adminRoutes);
app.use('/api/', ensRoutes);


app.listen(3001, () => console.log('Server started ...'));