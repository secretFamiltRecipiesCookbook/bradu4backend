# Recipes API

### BASE URL: https://buildweekrecipes.herokuapp.com/

# ENDPOINTS

## Authentication
#### [**POST**] (SIGN-UP) '/api/auth/register'    || username and password required, username must be unique
#### [**POST**] (LOGIN) '/api/auth/login'         || username and password required

## Recipes
#### [**GET**]       '/api/recipes'              || returns all of the recipes
#### [**GET**]       '/api/recipes/:id'          || returns a single recipe
#### [**POST**]      '/api/recipes'              || adding a recipe, all fields required excpet for image, returns the new recipe
#### [**PUT**]       '/api/recipes/:id'          || updating a recipe, all fields required except for image, returns updated recipe
#### [**DELETE**]    '/api/recipes/:id'          || deletes a recipe, returns deleted recipe
