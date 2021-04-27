const express = require('express')
const Recipe = require('./recipes-model');
const router = express.Router();
const restricted = require('../middleware/restricted');
const { checkRecipeId, checkPayload} = require('../middleware/middlwares');

router.get('/', restricted, (req, res, next) => {
    Recipe.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(next)
})

router.get('/:id', restricted, checkRecipeId, (req, res, next) => {
    Recipe.getRecipeById(req.params.id)
    .then((recipe) => {
        res.status(200).json(recipe);
    })
    .catch(next);
})

router.post('/', restricted, checkPayload, (req, res, next) => {
    Recipe.createRecipe(req.body)
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch(next);
})

router.put('/:id', restricted, checkRecipeId, checkPayload, (req, res, next) => {
    Recipe.updateRecipe(req.params.id, req.body)
    .then((recipe) => {
        res.status(200).json(recipe);
    })
    .catch(next);
})

router.delete('/:id', restricted, checkRecipeId, (req, res, next) => {
    Recipe.deleteRecipe(req.params.id)
    .then(() => {
        res.status(200).json({
            message: `Recipe with id ${req.params.id} deleted successfuly`
        })
    })
    .catch(next);
})

router.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something went wrong in the recipes router",
    });
  });

  module.exports = router;