// Simulação de um bancos de dados de memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 3, name: 'Josué', email: 'josue@gmail.com'},
    {id: 3, name: 'Roberto', email: 'roberto@gmail.com'}
];

//Função que irão simular a integração de banco de dados

//Função que lista todos os usuários (Comando Select)
const findAll = () => {
    return users;
}

//Funçaõ que busca um usuário por id (Comando Select from * usuarios where id = 1)
const findById = (id) => {
    return users.find(user => user.id === id);
}

// Função para adicionar um novo usuário (Comando Insert)
const create = (newUser) => {
    // Gerando o id do próximo item (usuário)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    const userWithId = {id: newId, ...newUser};

    //Adicionar o userWithId no array users
    users.push(userWithId);

    //Retornar o usuário cadastrado
    return userWithId;
}

module.exports = {
    findAll,
    findById,
    create
}