const knex = require("./knex")

function createUserTheme(userTheme) {
    return knex("user_theme").insert(userTheme)
}

function getUsersTheme() {
    return knex("user_theme").select("*")
}

function getUserTheme(userId) {
    console.log("userId",userId)
    return knex("user_theme").where("user_id",userId).select()
}

function updateUserTheme(userId,themeId) {
    console.log("userId",userId)

    return knex("user_theme").where("user_id",userId).update("theme_id",themeId)
}

module.exports = {
    getUsersTheme,
    getUserTheme,
    updateUserTheme,
    createUserTheme
};