var express = require('express');
var router = express.Router();
var equipasDAO = require('../models/equipasDAO');

//Models
var Equipa = require('../models/equipa');

//Routes

Equipa.methods(['get', 'put', 'post', 'delete']);
Equipa.register(router, '/equipasRest')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/equipas', function(req, res, next)  {
    res.render('equipas')
})

router.get('/jogo', function(req, res, next)  {
    res.render('jogo')
})

router.post('/equipasPost', function (req, res, next) {
    var equipa = {
        nomeE: req.body.nome,
        escalaoE: req.body.escalao,
        nivelComp: req.body.nivelCompetitivo
    };
    equipasDAO.create(equipa,
        function() {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("1 document inserted");
            return res.end();
        });
});

module.exports = router;