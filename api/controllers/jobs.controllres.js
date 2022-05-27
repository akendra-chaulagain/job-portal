//  database
require("../database/connection");

// jobs model
const Jobs = require("../models/Jobs");

// create jobs (only admin can create job)
const createJobs = async (req, res) => {
  if (req.user.isAdmin) {
    const body = req.body;
    const newList = new Jobs(body);
    try {
      const result = await newList.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(200).json(error);
    }
  } else {
    res.status(401).json("You are not allowed to create jobs");
  }
};

// update jobs  (only admin can update job)
const updateJobs = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      const updatedJObs = await Jobs.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(201).json(updatedJObs);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).json("You are not allowed to create jobs");
  }
};

// delete jobs  (only admin can delete job)
const deleteJobs = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      const deleteJobs = await Jobs.findByIdAndDelete(req.params.id);
      return res.status(201).json(deleteJobs);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).json("You are not allowed to create jobs");
  }
};

// find by id
const getJobsById = async (req, res, next) => {
  try {
    const result = await Jobs.findById(req.params.id);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// get all jobs
const getAllJObs = async (req, res, next) => {
  const qCategory = req.query.category;
  try {
    // get jobs according to user querys
    let jobs;
    if (qCategory) {
      jobs = await Jobs.find({
        JobCategory: {
          $in: [qCategory],
        },
      });
    } else {
      jobs = await Jobs.find();
    }
    res.status(201).json(jobs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createJobs,
  updateJobs,
  deleteJobs,
  getAllJObs,
  getJobsById,
};
