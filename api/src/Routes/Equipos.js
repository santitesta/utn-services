const router = require('express').Router();
const { getEquipos, getDeviceById } = require('../Controllers/equiposController');

router.get('/', getEquipos)

router.get('/:id', getDeviceById)

module.exports = router;