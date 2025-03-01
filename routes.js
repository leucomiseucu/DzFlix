const express = require('express');
const path = require('path');

const router = express.Router();

// Rota /inicio -> Servir index.html
router.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html')); // Caminho correto para index.html
});

module.exports = router;
