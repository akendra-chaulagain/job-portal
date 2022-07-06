const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// database
require("../database/connection");

// user model
const User = require("../models/User");

// register user
const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(500).json("enter all data");
  }
  try {
    //   if the user email already exist then this code will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(500).json("email already exist");
    }
    const user = new User({ username, email, password });
    // generate salt to hash password
    const salt = await bcrypt.genSalt(12);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// login user and bcrypt is used for password
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json("enter all data");
  }
  const user = await User.findOne({ email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      // jsonweb token is created
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1m" }
      );
      const { password, ...others } = user._doc;
      res.status(200).json({ others, token });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
};
module.exports = { createUser, loginUser };
