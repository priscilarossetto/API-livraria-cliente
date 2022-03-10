const Client = require("../models/ClientModel");

const {request, response} = require ("express")

module.exports = {
    async all(request, response) {
        try {
            const client = await Client.findAll();
            response.status(200).json(Client)
        } catch (error){
            response.status(400).json("deu erro!")
        }
    }
}