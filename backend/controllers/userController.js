import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const salt = 10;

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const name = user.name;
        const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: "1d" });

        // Set the cookie with options
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Only secure in production
            sameSite: "lax",
        });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
