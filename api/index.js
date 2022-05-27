const express = require("express");
const app = express();

// import routes
const jobsRoutes = require("./routers/jobs");

// dotenv file for  config file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// port no
const PORT = process.env.PORT;

// middleware for json format
app.use(express.json());

// database
require("./database/connection");

// routes
app.use("/api/jobs", jobsRoutes);

app.listen(PORT, () => {
  console.log(`running in port no :${PORT}`);
});
