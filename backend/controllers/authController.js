import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully",
      // data: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(400).json({ success: false, message: "Invalid password" });
    }
    const { password, role, ...rest } = user._doc;

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        data: { ...rest },
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to login" });
  }
};
