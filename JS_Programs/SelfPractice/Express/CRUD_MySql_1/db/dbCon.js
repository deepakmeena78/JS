const Sequelize = require("sequelize");

const createSequelize = new Sequelize("CRUD_EXPRESS", "root", "Ankit@123", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log
});

createSequelize.authenticate()
    .then(() => {
        console.log("Data Base Connected");
    })
    .catch((err) => {
        console.log('ERROR', err);
    });

module.exports = createSequelize;