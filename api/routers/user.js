const express = require("express");
const {
  getUserData,
  deleteUser,
  updateUser,
} = require("../controllers/user.controllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get user
router.get("/find/:id", verifyToken, getUserData);

module.exports = router;
