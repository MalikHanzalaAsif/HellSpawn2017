import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      name: user.fullName,
      email: user.email
    }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token valid for 7 days
  });
};

export const signup = async (req, res) => {
  if (req.cookies.token) {
    return res.json({
      message: "already logged in!",
      type: "info"
    });
  }
  const { fullName, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.json({
      message: "Email already in use",
      type: "error"
    });
  try {
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    const token = generateToken(newUser);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send user info to frontend
    res.json({
      message: "Signup successful",
      type: "success",
      user: {
        id: newUser._id,
        name: newUser.fullName,
        email: newUser.email,
      },
    });
    console.log("signup successfull!");
  } catch (err) {
    res.json({
      message: err.message,
      type: "error"
    });
    console.log(err.message);
  }
};

// Login Route
export const login = async (req, res) => {
  if (req.cookies.token) {
    return res.json({
      message: "already logged in!",
      type: "info"
    });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({
      message: "User not found",
      type: "error"
    });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.json({
      message: "Invalid credentials",
      type: "error"
    });

    // Generate JWT Token
    const token = generateToken(user);

    // Set JWT Token in HTTP-only Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      message: "Login successful",
      type: "success",
      user: {
        id: user._id,
        name: user.fullName,
        email: user.email,
      },
    });
  } catch (err) {
    res.json({
      message: err.message,
      type: "error"
    });
  }
};

export const logout = (req, res) => {
  if (!req.cookies.token) {
    return res.json({
      message: "already logged out!",
      type: "info"
    });
  }
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  });
  res.json({
    message: "Logged out!",
    type: "success"
  });
};


export const getUser = (req, res) => {
  res.json(req.user);
};