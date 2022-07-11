const express = require("express");
const router = express.Router();
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
} = require("../controllers/category.controllers");
const verifyToken = require("../middleware/verifyToken");
require("../database/connection");

// create Category
router.post("/", verifyToken, createCategory);

// update Category
router.put("/:id", verifyToken, updateCategory);

// delete Category
router.delete("/:id", verifyToken, deleteCategory);

// get job by id
router.get("/find/:id",  getCategoryById);

// get all Category
router.get("/allCategory", getAllCategory);

module.exports = router;
