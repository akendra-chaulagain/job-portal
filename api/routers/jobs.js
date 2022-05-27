const express = require("express");
const router = express.Router();
const {
  createJobs,
  updateJobs,
  deleteJobs,
  getAllJObs,
  getJobsById,
} = require("../controllers/jobs.controllres");

// jobs model
const Jobs = require("../models/Jobs");

require("../database/connection");

// create jobs
router.post("/", createJobs);

// update
router.put("/:id", updateJobs);

// delete jobs
router.delete("/:id", deleteJobs);

// get job by id
router.get("/find/:id", getJobsById);

// get all jobs
router.get("/allJobs", getAllJObs);

module.exports = router;
