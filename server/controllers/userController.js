import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token valid for 7 days
  });
};

export const signup = async (req, res) => {
  if (req.cookies.token) {
    return res.status(200).json({ success: "already logged in!" });
  }
  const { fullName, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ error: "Email already in use" });
  try {
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    const token = generateToken(newUser);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send user info to frontend
    res.status(200).json({
      message: "Login successful",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
    console.log("Logged in successfully!");
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.log(err.message);
  }
};

// Login Route
export const login = async (req, res) => {
  if (req.cookies.token) {
    return res.status(200).json({ success: "already logged in!" });
  }
  const { email, password } = req.body;
  try {
    // Find user in the database
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    // Check if password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    // Generate JWT Token
    const token = generateToken(user);

    // Set JWT Token in HTTP-only Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send user info to frontend
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({ success: "Logged out!" });
};
