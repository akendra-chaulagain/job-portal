const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyPhoto: {
      type: String,
    },
    saleryRange: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    noOfVacency: {
      type: String,
    },
    jobDesc: {
      type: String,
    },
    jobType: {
      type: String,
    },
    JobCategory: {
      type: String,
      required: true,
    },
    educationLevel: {
      type: String,
    },
    experience: {
      type: String,
    },
    skills: {
      type: String,
    },
    otherSpecification: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    deadLine: {
      type: String,
    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("JOBS", jobSchema);

module.exports = Jobs;
