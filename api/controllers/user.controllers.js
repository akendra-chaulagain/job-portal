require("../database/connection");

// user models
const User = require("../models/User");

// update user
const updateUser = (req, res, next) => {
    if (req.user.isAdmin) {
    try {
      const updateUser = await Jobs.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(201).json(updateUser);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).json("You are not allowed to create jobs");
  }
};

module.exports = updateUser
