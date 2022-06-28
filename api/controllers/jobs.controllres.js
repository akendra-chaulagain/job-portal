//  database
require("../database/connection");

// jobs model
const Jobs = require("../models/Jobs");

// create jobs (only admin can create job)
const createJobs = async (req, res) => {
  const body = req.body;
  const newList = new Jobs(body);
  try {
    const result = await newList.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json(error);
  }
};

// update jobs  (only admin can update job)
const updateJobs = async (req, res, next) => {
  // if (!req.body.img) {
  //   delete req.body.img;
  // }
  try {
    const updatedJObs = await Jobs.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(201).json(updatedJObs);
  } catch (error) {
    next(error);
  }
};

// delete jobs  (only admin can delete job)
const deleteJobs = async (req, res, next) => {
  try {
    const deleteJobs = await Jobs.findByIdAndDelete(req.params.id);
    return res.status(201).json(deleteJobs);
  } catch (error) {
    next(error);
  }
};

// get individual jobs by id
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
  const qcat = req.query.cat;
  try {
    // get jobs according to user querys
    let jobs;
    if (qcat) {
      jobs = await Jobs.find({
        cat: {
          $in: [qcat],
        },
      });
    } else {
      jobs = await Jobs.find().sort({ _id: -1 });
    }
    res.status(201).json(jobs);
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
