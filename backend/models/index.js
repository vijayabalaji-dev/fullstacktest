import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";

const { DB, USERNAME, PASSWORD, HOST, dialect, pool } = dbConfig;

const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect: dialect,
    pool: {
        max: pool.max,
        min: pool.min,
        acquire: pool.acquire,
        idle: pool.idle,
    },
});

export default sequelize;
