# <h1>**API-livraria-cliente**:books:</h1>

Projeto de encerramento do módulo 4 da Resilia Educação.
<br />
O projeto consiste no desenvolvimento de uma API para livraria, que possui todas as rotas básicas do CRUD. <br />
As condições principais para a entrega do projeto foram:
<li>o uso do padrão REST, com os verbos referentes ao protocolo HTTP;
<li>o uso do padrão DAO ou de ORM para interagir com o banco de dados - optamos por utilizar o ORM Sequelize e o banco de dados SQLite.;
<li>organização do desenvolvimento com padrão MVC.
<br />
<br />

<h2>Dependências do projeto:</h2>
<li>Para inicializar o projeto precisamos do Node.JS instalado na máquina, entre nesse <a href= https://nodejs.org/en/download/>link</a> e baixe a versão LTS referente ao seu sistema operacional. Foi utilizado a versão 16.14.0 no projeto.
<li>Quando terminar a instalação, confirme se ocorreu tudo bem abrindo o powershell/terminal do seu computador e digite o comando abaixo, se aparecer a versão que você instalou, então ele já está pronto para ser usado:
  
  ~~~~javascript
  node -v
  ~~~~

<li>Clone este repositório em sua máquina:
  
  ~~~~javascript
  $ git clone https://github.com/priscilarossetto/API-livraria-cliente.git
  ~~~~

<li>Será necessário instalar as dependências do projeto. Abra o terminal dentro da pasta do projeto e execute o seguinte:
  
  ~~~~javascript
  npm install
  npm install express
  npm install sequelize
  npm install sqlite3
  ~~~~
  
<li>Inicie o projeto:
  
  ~~~~javascript
  npm run dev
  ~~~~
ou
  ~~~~javascript
  npm start
  ~~~~

<br />
<h2>Criando uma conexão no Beekeeper</h2>
Caso queira observar as alterações no banco de dados, a aplicação open-source Beekeeper é uma opção.
  <br />
<li>Disponível para download em: https://www.beekeeperstudio.io/ <br />
  <br />
Após a instalação:
  <br />
  
  <li>Select a connection type: sqlite
  <li>database file: Procurar a pasta do projeto e seleciona o arquivo dev.sqlite
  <li>Nomear e salvar
  <li>Rodar o servidor com npm run dev e recarregar no Beekeeper: a(s) entidade(s) deve(m) aparecer lá
<br />
<br />
<h2>Rotas do projeto:</h2>
    A partir de uma ferramenta para consulta de requisições, no projeto utilizamos o <a href= https://insomnia.rest/download/>Insomnia</a> para testar as rotas GET, POST, PUT e DELETE.
    <br />
    Verifique antes se o seu servidor está rodando, se não, não será possível testar esse e outros métodos.
    <br />
    Passo a passo utilizando a entidade <strong>Cliente</strong>.
<br />  
<h3>Create - POST:</h3>
  
  ~~~~html
  /client
  ~~~~
<li>Cria um registro de cliente no banco de dados. É necessário enviar um body no formato JSON com as informações a seguir:
  
  ~~~~javascript
    {
      "nome" : "",
      "sobrenome" : "",
      "cpf" : "",
      "email" : "",
      "endereco" : "",
      "telefone" : ""
    }
   ~~~~
<br />
<h3>Read - GET:</h3>
  
  ~~~~html
  /client
  ~~~~
  
<li> Retorna as informações de todos os clientes salvos no banco de dados.
<br />
<br />
  
  ~~~~html
  /client/:id
  ~~~~

 <li> Retorna as informações correspondente a id informada como parâmetro.
<br />
<br />
<h3>Update - PUT:</h3>
  
  ~~~~html
  /client/:id
  ~~~~
  
<li>Atualiza o nome, sobrenome, cpf, email, endereco e telefone do cliente com a id informada no banco de dados. Caso não exista um cliente com a respectiva id é retornado um erro com status 400. É necessário enviar no body da requisição um JSON:
  
  ~~~~javascript
    {
      "nome" : "",
      "sobrenome" : "",
      "cpf" : "",
      "email" : "",
      "endereco" : "",
      "telefone" : ""
    }
   ~~~~
  
<br />

<h3>Delete - DELETE:</h3>
  
  ~~~~html
  /client/:id
  ~~~~
  
<li>Remove um registro de cliente com a id informada do banco de dados. Caso não exista um cliente com a respectiva id é retornado um erro com status 400.
<br />

<h2>Tecnologias utilizadas</h2>
 <div style="display: inline_block">
   <img align= "center" src= https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg>
   <img align= "center" src= https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black>
   <img align= "center" src= https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white>
   <img align= "center" src= https://img.shields.io/badge/Express.js-404D59?style=for-the-badge>
   <img align= "center" src= https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465>
   <img align= "center" src= https://camo.githubusercontent.com/93ae318132d035a8c007ee1cb244f63a02d87cc0051dfa67323f5bfdc6b222d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e736f6d6e69612d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d696e736f6d6e6961266c6f676f436f6c6f723d353834394245>
  <li>VSCode
    <li>JavaScript
      <li>NodeJS
        <li>Express
          <li>Sequelize ORM
            <li>Beekeeper
            <li>Insomnia
