const Auth = require('../auth/auth-model');
const { getRecipeById } = require('../recipes/recipes-model');

const checkUsernameAvailable = async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      next();
    } else {
      const { username } = req.body;
      const userExists = await Auth.findBy({ username });
      if (userExists.length > 0) {
        res.status(401).json({ message: "username taken" });
      } else {
        next();
      }
    }
  };

const checkUsernameExists = async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      next();
    } else {
      const { username } = req.body;
      const userExists = await Auth.findBy({ username });
      if (!userExists) {
        res.status(401).json({ message: "invalid credentials" });
      } else {
        next();
      }
    }
  };

  const checkRecipeId = async (req, res, next) => {
    try{
      const recipe = await getRecipeById(req.params.id);
      if(!recipe) {
        res
        .status(404)
        .json({message: `Recipe with id ${req.params.id} not found`})
      } else {
        next()
      }
    } catch (err) {
      next(err)
    }
  }

  const checkPayload = (req, res, next) => {
    if (!req.body.title || !req.body.source || !req.body.ingredients || !req.body.instructions || !req.body.category) {
      res
      .status(400)
      .json({message: "title, source, ingredients, instructions, and category are required"})
    } else {
      next();
    }
  };
  
  module.exports = {
    checkUsernameAvailable,
    checkUsernameExists,
    checkRecipeId,
    checkPayload,
  };