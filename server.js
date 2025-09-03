
// importar o módulo express
const express = require('express');

//Importar o arquivo das rotas dos usários
const userRoutes = require('./src/routes/userRoutes')

//Criar uma aplicação
const app = express();

//Definir a porta que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de teste da API 
app.get(`/api`, (req, res) => {
    res.send(`API de usuários está funcionando`);
});

app.get('/api/listar', (req, res) => {

})

app.get('/api/cadastrar', (req,res) =>{
    
})

// Configurando rotas de usuário
app.use('/api/users', userRoutes)

//Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})