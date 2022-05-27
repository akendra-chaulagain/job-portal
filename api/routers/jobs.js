const express = require("express");
const router = express.Router();
const {
  createJobs,
  updateJobs,
  deleteJobs,
  getAllJObs,
  getJobsById,
} = require("../controllers/jobs.controllres");
const verifyToken = require("../middleware/verifyToken");


require("../database/connection");

// create jobs
router.post("/", verifyToken, createJobs);

// update jobs
router.put("/:id", verifyToken, updateJobs);

// delete jobs
router.delete("/:id", verifyToken, deleteJobs);

// get job by id
router.get("/find/:id", getJobsById);

// get all jobs
router.get("/allJobs", getAllJObs);

module.exports = router;
