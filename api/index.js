const express = require("express");
const app = express();

// import routes
const jobsRoutes = require("./routers/jobs");
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");

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
app.use("/api/v1/jobs", jobsRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`running in port no :${PORT}`);
});
