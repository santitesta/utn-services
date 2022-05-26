const { Router } = require('express');
// Importar todos los routers;
const Equipos = require('./Equipos')

const router = Router();

// Configurar los routers
router.use('/equipos', Equipos)

module.exports = router;