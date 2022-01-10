var express = require('express');
var router = express.Router();
const db = require("../db/theme")

router.get('/', async function (req, res) {
  const themes=await db.getThemes();
  res.status(200).json({themes})

});

router.post('/', async function (req, res) {
  const results = await db.createTheme(req.body)
  res.status(201).json({ id: results[0] })
});


module.exports = router;
