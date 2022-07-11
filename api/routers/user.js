const express = require("express");
const {
  getUserData,
  deleteUser,
  updateUser,
  getAllUserData,
} = require("../controllers/user.controllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get user
router.get("/find/:id", verifyToken, getUserData);

// get user
router.get("/user", getAllUserData);

module.exports = router;
