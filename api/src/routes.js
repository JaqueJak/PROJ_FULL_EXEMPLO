const express = require('express');

const router = express.Router();

const Colaborador = require('./controllers/colaborador');
const Os = require('./controllers/os');
const Comentario = require('./controllers/comentario');

router.get('/', (req, res) => {return res.json("API OSs respondendo na porta 3000")});

module.exports = router;