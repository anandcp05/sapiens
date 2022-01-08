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

function updateUserTheme(userId,userTheme) {
    console.log("userId",userId)
    console.log("userTheme",userTheme)

    return knex("user_theme").where("user_id",userId).update(userTheme)
}

module.exports = {
    getUsersTheme,
    getUserTheme,
    updateUserTheme,
    createUserTheme
};