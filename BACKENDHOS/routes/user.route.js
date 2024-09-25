const express = require('express');
const router = express.Router();

const {signup, signin} = require("../Controller/user.controller")

<<<<<<< HEAD
router.get("/signin", fetchAll)
=======
router.post("/signin", signin)
>>>>>>> 2af24cb78f82f4ff0fdbf4ffeaca80224ed73b66
router.post("/signup", signup)

module.exports = router