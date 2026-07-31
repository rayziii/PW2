
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
var DATA = require('./data.js'); 

app.get('/', (req, res) => { // entrar na página inicial
    res.render('index', {});
});

app.get('/login',(req,res)=>{ // entrar no login
    res.render('login',{
        erro: null
    });
});

app.get('/sobre', (req, res) => { //entrar no sobrenózes
    res.render('sobre', {});
});

app.get('/erro', (req, res) => { //entrar na página 404
    res.render('erro', {});
});

app.post('/log-in',(req,res)=>{ // código do login
    let nome = req.body.nome
    let senha = req.body.senha
    // vai dizer se a senha ta certa senão ele esgana o joão

    let usuarioEncontrado = false;

    for(i=0;i<DATA.length;i++){
    if(nome === DATA[i].nome && senha === DATA[i].senha){
        usuarioEncontrado = true;
        }
    }

    if(usuarioEncontrado) {
        return res.render('index');
    } else {
        return res.render('login' , {
            erro: 'NOME DE USUÁRIO OU SENHA INCORRETOS.'
        });
    }

});

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081"),
    console.log(DATA[0].maneNaruto)
);

