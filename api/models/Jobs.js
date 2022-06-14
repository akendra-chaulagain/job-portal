const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    desc: {
      type: String,
    },
    cat: {
      type: String,
    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("JOBS", jobSchema);

module.exports = Jobs;
