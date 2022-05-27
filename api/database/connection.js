const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dot env
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(`database error ${err}`);
  });
