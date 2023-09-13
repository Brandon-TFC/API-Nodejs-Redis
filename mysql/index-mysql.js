const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const router = require('./network');

const app = express();
const router = require('./network');
app.use(bodyParser.json());

//Rutas
app.use('/', router);

app.listen(config.mysqlSerivce.port, () => {
    console.log('Servicio de Mysql escuchando en el puerto ', config.mysqlSerivce.port);
})