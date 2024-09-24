const express = require('express');
const router = express.Router();

const {signup, fetchAll} = require("../Controller/signup.controller")

router.get("/user/signin", fetchAll)
router.post("/signup", signup)

module.exports = router