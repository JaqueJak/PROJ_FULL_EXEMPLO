const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verity(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).env();
        else {
            next();
        }
    })

    res.status(200).env();
}

module.exports = {
    validaAcesso
}