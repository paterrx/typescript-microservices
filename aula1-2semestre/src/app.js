const express = require('express');
const app = express();
//const route = new express.Router();
//express.json: configurar para receber json nos request
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const index = require('./routes/index')
app.use('/', index)
/*
// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    re
s.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//registrar os models


//criar rotas

*/

module.exports = app;