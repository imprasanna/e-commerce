const crypto = require("crypto");
const User = require("../models/userModel");

const genPwResetToken = (user) => {
  const resetToken = crypto.randomBytes(20).toString("hex");

  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

  return resetToken;
};

module.exports = genPwResetToken;
