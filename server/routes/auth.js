const express = require("express");

const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const verifyToken = require("../Middleware/checkauth");

// route Get Api/auth
// @desc Check if user is logged in
//
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(400).json({ success: false, message: "User not fond" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
});

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Simple validation

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username or Password" });
  try {
    // check for existing user
    const user = await User.findOne({ username: username });
    if (user) {
      //chenk not fint user
      return res
        .status(400)
        .json({ success: false, message: "User da ton tai" });
    }

    // hashed password
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    // retun token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACESS_TOKEN_SECRET
    );
    res.json({ success: true, message: "dnag nhap thanh cong", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});
// route POST api/auth/login
// @desc Login user
// @ access Public

router.post("/login", async (req, res) => {
  // get user from client
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "không có pass hoặc usermae" });
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Mật khẩu hoặc tài khoản chưa đúng" });
    }
    const passwordVaild = await argon2.verify(user.password, password);
    if (!passwordVaild)
      return res
        .status(400)
        .json({ success: false, message: "Mật khâu không đúng" });
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACESS_TOKEN_SECRET
    );
    res.json({ success: true, message: "dnag nhap thanh cong", accessToken });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
