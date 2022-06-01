const { Router } = require('express');
// Importar todos los routers;
const Equipos = require('./Equipos')
const User = require('./user.js');

const router = Router();

// Configurar los routers
router.use('/equipos', Equipos)

router.use('/user', User);

module.exports = router;