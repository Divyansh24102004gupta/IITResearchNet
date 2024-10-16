import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User does not exist!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (!role) {
      return res.status(400).json({ error: "Please provide role!" });
    }

    if (user.role !== role) {
      return res.status(400).json({ error: "Invalid role is selected!" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
      role: user.role,
      college: user.college,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({
      success: true,
      message: "user logged out successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Sorry, user does not logged out successfully!",
    });
  }
};

export const signup = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      role,
      college,
    } = req.body;

    if (
      !fullName ||
      !username ||
      !password ||
      !confirmPassword ||
      !gender ||
      !role ||
      !college
    ) {
      return res.status(400).json({ error: "Please provide all details!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match!" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //hash passwor here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //http://avatar
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      role,
      college,
    });

    if (!newUser) {
      return res
        .status(400)
        .json({ error: "Sorry User do not registered successfully!" });
    }

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "user registered successfully!",
      _id: newUser._id,
      fullName: newUser.fullName,
      profilePic: newUser.profilePic,
      role,
      college,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "error occured while registering user!" });
  }
};
