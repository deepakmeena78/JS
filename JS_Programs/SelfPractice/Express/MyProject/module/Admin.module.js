import { DataTypes } from "sequelize";
import sequelize from "../db/db.config.js";

const Admin = sequelize.define("Admin", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

sequelize.sync()
    .then(() => {
        console.log("Admin Module Created");
    })
    .catch(() => {
        console.log("ERROR Table");
    });

export default Admin;
