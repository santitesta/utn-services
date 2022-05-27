const { Router } = require('express');
const { getEquipos, getDeviceById } = require('../Controllers/equiposController');
const router = Router();

router.get('/', getEquipos)

router.get('/:id', getDeviceById)

module.exports = router;