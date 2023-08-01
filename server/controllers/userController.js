const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const genAuthToken = require("../utils/genAuthToken");
const sendToken = require("../utils/sendJwtToken");

const registerUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: {
        public_id: "Sample_id",
        url: "Sample_url",
      },
    });

    // Hash the password and save it in db
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, +salt);

    await user.save();

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    // Check if the given email and password is valid or not
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);

    // Check if the password matches the user credentials for login
    if (!isValid) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };
