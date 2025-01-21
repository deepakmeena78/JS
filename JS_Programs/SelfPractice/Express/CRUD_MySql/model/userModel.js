import DataTypes from "sequelize";
import bcrypt from "bcrypt";
import Sequelize from "../db/DBcon.js";

const User = Sequelize.define("user", {
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
            console.log("Insede Setter", v);
            let saltkey = bcrypt.genSaltSync(10);
            let ecryptPasswod = bcrypt.hashSync(v, saltkey);
            this.setDataValue("password", ecryptPasswod);
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

Sequelize.sync()
    .then(() => {
        console.log("User Is Created");
    })
    .catch((err) => {
        console.log('ERROR', err);
    });

export default User;