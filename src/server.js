const express = require("express");
const sequelize = require("./config/database");
const clientRoute = require ("./routes/client.routes");

const port = 3000;
const app = express();

sequelize.sync().then(() => {
    console.log("database is running");
});

app.use(express.json());

app.use(clientRoute);

//app.get('/cliente', (req,res) => {res
//    .status(200)
//    .send({ mensagem: 'Boas-vindas à API'})
//});

//app.post('/cliente', (req, res) => {
//    console.log(req.body);
//    res.json({
//        "statusCode": 200
//    })
//})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});