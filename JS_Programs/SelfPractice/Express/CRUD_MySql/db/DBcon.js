import Sequelize from "sequelize";

const createSequelize = new Sequelize("Expess_CRUD", "root", "Ankit@123", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
});

createSequelize.authenticate()
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("ERROR", err);
    });

export default createSequelize;