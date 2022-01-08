var express = require('express');
var router = express.Router();
const db = require("../db/user")

router.get('/user', async function (req, res) {
  const users=await db.getUsers();
  res.status(200).json({users})

});

router.post('/user', async function (req, res) {
  const results = await db.createUser(req.body)
  res.status(201).json({ id: results[0] })
});


module.exports = router;
