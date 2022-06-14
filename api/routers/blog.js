const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
} = require("../controllers/blog.controllers");
const verifyToken = require("../middleware/verifyToken");

require("../database/connection");

// create Blog
router.post("/", verifyToken, createBlog);

// update Blog
router.put("/:id", verifyToken, updateBlog);

// delete Blog
router.delete("/:id", verifyToken, deleteBlog);

// get job by id
router.get("/find/:id", getBlogById);

// get all Blog
router.get("/allBlog", getAllBlog);

module.exports = router;
