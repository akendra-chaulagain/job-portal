require("../database/connection");
const bcrypt = require("bcrypt");

// user models
const User = require("../models/User");

// update user
const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(12);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updateUser);
  } catch (error) {
    next(error);
  }
};

// delete user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "delete success ", user });
  } catch (err) {
    next(err);
  }
};

// get admin user data
const getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { updateUser, deleteUser, getUserData };
