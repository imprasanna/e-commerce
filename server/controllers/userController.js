const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendJwtToken");
const genPwResetToken = require("../utils/genPwResetToken");
const sendEmail = require("../utils/sendEmail");

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
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please enter your email and password" });
    }

    const user = await User.findOne({ email: req.body.email });

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

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const resetToken = genPwResetToken(user);

  // console.log("RESET TOKEN", resetToken);

  await user.save();

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/password/reset/${resetToken}`;

  const message = `Your password reset token is:\n\n${resetPasswordUrl}\n\nIf you have not requested for this email, then please ignore it!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, forgotPassword };
