const knex = require("./knex")

function createUser(user) {
    return knex("users").insert(user)
}

function getUsers() {
    return knex("users").select("*")
}

module.exports = {
    createUser,
    getUsers
};