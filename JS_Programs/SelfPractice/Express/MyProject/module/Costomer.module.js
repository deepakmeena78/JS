import { DataTypes } from "sequelize";
import sequelize from "../db/db.config.js";

const Constomer = sequelize.define("costomer", {
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
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pincode: {
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
        console.log("Costomer Module Created");
    })
    .catch(() => {
        console.log("ERROR Table");
    });

export default Constomer;
