//  database
require("../database/connection");

// jobs model
const Jobs = require("../models/Jobs");

// create jobs
const createJobs = async (req, res, next) => {
  const body = req.body;
  const newList = new Jobs(body);
  try {
    const result = await newList.save();
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// update jobs
const updateJobs = async (req, res, next) => {
  try {
    const updatedJObs = await Jobs.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(201).json(updatedJObs);
  } catch (error) {
    next(error);
  }
};

// delete jobs
const deleteJobs = async (req, res, next) => {
  try {
    const deleteJobs = await Jobs.findByIdAndDelete(req.params.id);
    return res.status(201).json(deleteJobs);
  } catch (error) {
    next(error);
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
  try {
    const result = await Jobs.find();
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createJobs,
  updateJobs,
  deleteJobs,
  getAllJObs,
  getJobsById,
};
