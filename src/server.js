const express = require("express");
const sequelize = require("./config/database");
const clientRoute = require("./routes/client.routes");

const port = 3000;
const app = express();

sequelize.sync().then(() => {
    console.log("database is running");
});

app.use(express.json());

app.use(clientRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});