import express from "express";
import cors from "cors";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./models/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["POST", "GET", "PUT"],
        credentials: true,
    })
);
app.use(cookieParser());


app.use("/api", userRoutes);
// port

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });



// Sync all models
sequelize.sync({ force: false }).then(() => {
    console.log("Database synchronized.");
});
const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
