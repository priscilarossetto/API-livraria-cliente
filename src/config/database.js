const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookstore", "user", "password", {
    dialect: "sqlite",
    host: "./dev.sqlite",
});

module.exports = sequelize;