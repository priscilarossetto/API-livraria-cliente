const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Client extends Model {}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true
        },

        nome: {
            type: DataTypes.STRING,
        },

        sobrenome: {
            type: DataTypes.STRING,
        },

        cpf: {
            type: DataTypes.INTEGER,
        },

        email: {
            type: DataTypes.STRING,
        },

        endereco: {
            type: DataTypes.STRING,
        },

        telefone: {
            type: DataTypes.INTEGER,
        },
    },
    {
    sequelize,
    modelName: "client",
    timestamps: false
    }
);

module.exports = Client;