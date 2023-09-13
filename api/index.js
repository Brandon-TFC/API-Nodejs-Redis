const express = require('express');
const bodyParse = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network.js');
const auth = require('./components/auth/network.js');
const errors = require('../network/errores.js');

const app = express();
const swaggerDoc = require('./swagger.json');
app.use(bodyParse.json());
//Definir rutas
app.use('/api/user', user);
app.use('/api/auth', auth);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port,() =>{
    console.log('Api escuchando en el puerto ', config.api.port);
}); 