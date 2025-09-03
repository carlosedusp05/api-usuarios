// 1° Passo - importar o express
const express = require('express');

// 2° Passo - criar um router e importar o controlador
const router = express.Router();

const userController = require('../controller/userController');

// 3° Passo - Criar rotas de usuários
router.get('/list', userController.getAllUsers);

module.exports = router;