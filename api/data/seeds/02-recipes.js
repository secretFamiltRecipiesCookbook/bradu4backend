exports.seed = function (knex) {
    return knex('recipes')
    .del()
    .then(function () {
        return knex('recipes').insert([
            {
                title: 'Spaghetti & Meatballs',
                source: 'Grandma',
                ingredients: 'Spaghetti, Meatballs, Tomatoes',
                instructions: '1)Make Sauce 2)Make Spaghetti 3)Make Meatballs 4)Mix together',
                category: 'Dinner',
            },
            {
                title: 'Grannys Famous Pancakes',
                source: 'Grandma',
                ingredients: 'Pancake batter, eggs, milk, maple syrup',
                instructions: '1)Mix batter eggs and milk, 2)Cook on griddle or skillet 3)Cover with syrup and eat',
                category: 'Breakfast',
            },
        ])
    })
}