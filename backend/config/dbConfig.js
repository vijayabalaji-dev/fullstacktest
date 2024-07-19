const DB = {
    HOST: "localhost",
    USERNAME: "root",
    PASSWORD: "",
    DB: "newauth",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default DB;
