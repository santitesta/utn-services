const { Router } = require('express');
const { getEquipos } = require('../Controllers/equiposController');
const router = Router();

router.get('/', getEquipos)

module.exports = router;