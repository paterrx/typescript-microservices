const express = require('express')
const router = new express.Router()

//Apenas para testar a API
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" : "Gabriel Paterra"
    });
});

//api Unathorized
router.get('/privada', (req, res) => {
    const token = req.headers['authorization'];

    if (!token || token !== 'minhaSenha') {
        return res.status(401).send('Acesso negado');
    }

    res.send('Acesso permitido').status(200);
});

const tokenExemplos ={
    'tokenAdmin' : {role: 'admin'},
    'tokenUser' : {role: 'user'},
    'tokenConvidado' : {role: 'convidado'}
}

router.get('/admin', (req, res) =>{
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Acesso negado');
    }

    const user = tokenExemplos[token];
    if(!user) {
        return res.status(401).send('Token Invalido');
    }

    if(user.role != 'admin') {
        return res.status(403).send('Voce nao tem permssao de acessar aqui');
    }

    return res.send('Acesso permitido').status(200);
})

//exemplo bad request - 400
router.post('/submit', (req, res) => {
    
    const {nome, email} = req.body;

    if(!nome || !email) {
        return res.status(400).send('Bad request..Favor eviar nome e e-mail');
    }

    //status 202 created
    res.status(201).send('Dado criado com sucesso!');

})

//status 404

let items =[
    {id: 1, nome: 'item 1'},
    {id: 2, nome: 'item 2'},
    {id: 3, nome: 'item 3'}
]

router.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if (item) {
        res.status(200).send(item);
    } else {
        res.status(404).send('Item nao encontrado');
    }
});

module.exports = router