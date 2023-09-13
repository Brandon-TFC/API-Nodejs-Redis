const express = require('express');
const bodyParse = require('body-parser');

const config = require('../config.js');
const post = require('./components/post/network.js');
const errors = require('../network/errores.js');

const app = express();

app.use(bodyParse.json());
//Definir rutas

app.use('/api/post', post);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.post.port,() =>{
    console.log('Servicio post escuchando en el puerto', config.post.port);
}); 