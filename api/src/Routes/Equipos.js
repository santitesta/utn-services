const router = require('express').Router();
const { getEquipos, getDeviceById, getDeviceByInstitute } = require('../Controllers/equiposController');

router.get('/', getEquipos)

router.get('/id/:id', getDeviceById)

router.get('/ins/:ins', getDeviceByInstitute)

module.exports = router;