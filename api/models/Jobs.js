const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobPhoto: {
      type: String,
    },
    jobDesc: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("JOBS", jobSchema);

module.exports = Jobs;
