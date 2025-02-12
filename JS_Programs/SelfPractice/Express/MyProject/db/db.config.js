import { Sequelize } from "sequelize";
const root = process.env.DB_ROOT
const password = process.env.DB_PASSWORD
const dialect = process.env.DB_DIALECT
const host = process.env.DB_HOST
const database = process.env.DB_NAME

const sequelize = new Sequelize(database || "project", root || "root", password || "Ankit@123", {
    host: host || "localhost",
    dialect: dialect || "mysql"
});

export default sequelize;