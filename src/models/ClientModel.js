const {Model, DataTypes} = require("sequelize");

const sequelize = require("../database");

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.STRING,
        primaryKey : true
    },

    nome: {
        type: DataTypes.STRING
    },

    sobrenome: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },

    endereco: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "client",
    timestamps: false
})

module.exports = Client;