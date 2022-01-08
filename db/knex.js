const knex=require("knex");

const connectedKnex = knex({
    client:"sqlite3",
    connection:{
        filename:"sapiens.sqlite3"
    }
})

module.exports=connectedKnex;