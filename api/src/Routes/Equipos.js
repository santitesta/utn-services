const router = require('express').Router();
const { getEquipos, getDeviceById, getDeviceByInstitute, getDeviceByService } = require('../Controllers/equiposController');

router.get('/', getEquipos)

router.post('/id', getDeviceById)

router.get('/ins/:ins', getDeviceByInstitute)

router.get('/serv/:serv', getDeviceByService)

module.exports = router;