// 1° Passo - importar o userModel
const userModel = require('../model/userModel');

//Função do controller que lista os usuáruios 
const getAllUsers = (req, res) =>{

    //Chamando a função findAll do model
    const users = userModel.findAll();

    //Devolvendo resposta para o cliente
    res.status(200).json(users);
}

module.exports = {
    getAllUsers
}