const db = require('../data/db-config');

const getRecipes = () => {
    return db('recipes');
};

const getRecipeById = (recipe_id) => {
    return db('recipes').where('recipe_id', recipe_id).first()
}

const createRecipe = (recipe) => {
    return db('recipes').insert(recipe, [
        'recipe_id',
        'title',
        'source',
        'ingredients',
        'instructions',
        'category',
        'image'
    ]);
};

const updateRecipe = async (id, recipe) => {
    return db('recipes')
    .where('recipe_id', id)
    .update(recipe, [
        'recipe_id',
        'source',
        'ingredients',
        'instructions',
        'category',
        'image'
    ]);
};

const deleteRecipe = async (recipe_id) => {
    return db('recipes').where('recipe_id', recipe_id).del();
};

module.exports = {getRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe}