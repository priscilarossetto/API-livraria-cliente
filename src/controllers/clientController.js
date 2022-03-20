const Client = require("../models/clientModel");

module.exports = {
    async all(request, response) {
        try {
            const client = await Client.findAll();
            response.status(200).json(client);
        } catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    },
    async create(request, response) {
        try {
            await Client.create(request.body);
            response.status(200).json("Cliente inserido com sucesso!");
        } catch (error) {
            response.status(400).send(error);
        }
    },
    async one(request, response) {
        try {
            const id = request.params.id;
            const client = await Client.findOne({where: {id}});

            if(!client) {
                return response.status(400).json("Cliente não encontrado!");
            }
            response.status(200).json(client);
        } catch (error) {
            response.status(400).send(error);
        }
    },
    async update(request, response) {
        try {
            const {nome, sobrenome, cpf, email, endereco, telefone} = request.body;
            const id = request.params.id;
            const client = await Client.findOne({where:{id}});

            if(!client) {
                return response.status(400).json("Cliente não localizado!");
            }
            client.nome = nome;
            client.sobrenome = sobrenome;
            client.cpf = cpf;
            client.email = email;
            client.endereco = endereco;
            client.telefone = telefone;

            await client.save();
            response.status(201).json("Cliente atualizado!");
        } catch (error) {
            response.status(400).send(error);
        }
    },
    async delete(request, response) {
        try {
            const id = request.params.id;
            const client = await Client.destroy({where: {id}});
            if(!client) {
                return response.status(400).json("Cliente não encontrado!");
            }
            response.status(201).json("Cliente removido!");
        } catch (error) {
            response.status(400).send(error);
        }
    }
};