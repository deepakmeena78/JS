import { DataTypes } from "sequelize";
import sequelize from "../db/db.config.js";

const Help = sequelize.define("Help", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    postedby: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

sequelize.sync()
    .then(() => {
        console.log("Help Module Created");
    })
    .catch(() => {
        console.log("ERROR Table");
    });

export default Help;
