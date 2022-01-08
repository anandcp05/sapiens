const knex = require("./knex")

function createTheme(theme) {
    return knex("theme").insert(theme)
}

function getThemes() {
    return knex("theme").select("*")
}

module.exports = {
    createTheme,
    getThemes
};