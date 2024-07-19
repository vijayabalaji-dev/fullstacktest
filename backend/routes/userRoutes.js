import { Router } from "express";
import {
    getAllUsers,
    createUser,
    loginUser,
} from "../controllers/userController.js";
import { json } from "sequelize";
import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log("No token found");
        return res.status(401).json({ error: "you are not authenticated" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decode) => {
            if (err) {
                console.log("Token verification failed:", err);
                return res.status(403).json({ error: "Invalid token" });
            } else {
                console.log("Token verified, user:", decode.name);
                req.name = decode.name;
                next();
            }
        });
    }
};

const router = Router();

router.get("/", authenticate, (req, res) => {
    console.log("response sent");
    res.status(200).json({ status: "success", name: req.name });
});
router.get("/users", getAllUsers);
router.post("/users", createUser);
router.post("/login", loginUser);

export default router;
