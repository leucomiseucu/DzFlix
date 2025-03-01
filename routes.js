const express = require('express');
const path = require('path');

const app = express();

// Rota /inicio -> Servir index.html
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Caminho para o arquivo index.html
});

module.exports = app; // Exportando o app para ser utilizado em outro arquivo
