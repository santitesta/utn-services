const { Router } = require('express');
const { createDiet, getDiets, chargeDiets } = require('../Controllers/dietController.js');
const router = Router();

router.get('/', getDiets)

router.post('/', createDiet)

module.exports = router;

// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá