const express = require("express");
const router = express.Router();
const updateUser = require("../controllers/user.controllers");
const verifyToken = require("../middleware/verifyToken");

// update user
router.put("/", verifyToken, updateUser);

module.exports = router;
