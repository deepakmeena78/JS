const DataTypes = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../db/dbCon");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(v) {
            console.log("Inside Setter ", v);
            let saltKey = bcrypt.genSaltSync(10);
            let ecryptpassword = bcrypt.hashSync(v, saltKey);
            this.setDataValue("password", ecryptpassword);
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact: {
        type: DataTypes.BIGINT
    }
});

sequelize.sync()
    .then(() => {
        console.log("User Table Created");
    })
    .catch((err) => {
        console.log("ERROR", err);
    });

module.exports = User;