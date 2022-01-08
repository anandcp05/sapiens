var express = require('express');
var router = express.Router();
const db = require("../db/userTheme")

router.get('/theme', async function (req, res) {
  const users=await db.getUsersTheme();
  res.status(200).json({users})

});

router.get('/theme/:userId', async function (req, res) {
    const users=await db.getUserTheme(req.params.userId);
    res.status(200).json({users})
  });

  router.patch('/theme/:userId', async function (req, res) {
    const users=await db.updateUserTheme(req.params.userId,req.body);
    res.status(200).json({users})
  
  });
router.post('/theme', async function (req, res) {
  const results = await db.createUserTheme(req.body)
  res.status(201).json({ id: results[0] })
});


module.exports = router;
