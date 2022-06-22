const { Router } = require('express');
// Importar todos los routers;
const Equipos = require('./Equipos')
const User = require('./user');
const Orders = require('./orders');

const router = Router();

// Configurar los routers
router.use('/equipos', Equipos)

router.use('/user', User);

router.use('/orders', Orders);

module.exports = router;