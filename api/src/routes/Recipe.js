const { Router } = require('express');
const { getRecipe, getRecipeById, createRecipe } = require('../Controllers/recipeController');
const router = Router();

router.get('/', getRecipe)

router.get('/:id', getRecipeById)

router.post('/', createRecipe)

module.exports = router;