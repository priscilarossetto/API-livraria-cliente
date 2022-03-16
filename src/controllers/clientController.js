const Client = require("../models/clientModel");

module.exports = {
    async all(request, response) {
        try {
            const client = await Client.findAll();
            response.status(200).json(client);
        } catch (error){
            console.log(error);
            response.status(400).json(error);
        }
    }
}