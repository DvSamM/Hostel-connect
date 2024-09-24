const express = require('express');
const router = express.Router();

const {signup, fetchAll} = require("../Controller/signin.controller")

router.get("/user/signin", fetchAll)
router.post("/signin", signup)

module.exports = router