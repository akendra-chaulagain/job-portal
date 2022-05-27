const express = require("express");
const router = express.Router();

// jobs model
const Jobs = require("../models/Jobs");

require("../database/connection");
// create jobs
router.post("/", async (req, res) => {
  const body = req.body;
  const newList = new Jobs(body);
  try {
    const result = await newList.save();
    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const updatedJObs = await Jobs.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(201).json(updatedJObs);
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete jobs
router.delete("/:id", async (req, res) => {
  try {
    const deleteJobs = await Jobs.findByIdAndDelete(req.params.id);
    return res.status(201).json(deleteJobs);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get job by id
router.get("/find/:id", async (req, res) => {
  try {
    const result = await Jobs.findById(req.params.id);
    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get all jobs
router.get("/allJobs", async (req, res) => {
  try {
    const result = await Jobs.find();
    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
