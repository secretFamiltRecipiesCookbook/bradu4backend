const db = require('../data/db-config');

function find() {
    return db('users');
}

function findBy(filter){
    return db('users').select('user_id', 'username', 'password').where(filter)
}

function findById(id) {
    return db('users')
    .select('user_id', 'username', 'password')
    .where('user_id', id)
    .first()
}

function add(user){
    return db('users').insert(user, [
        'user_id',
        'username',
        'password'
    ]);
}

module.exports = {
    add,
    find,
    findBy,
    findById
}