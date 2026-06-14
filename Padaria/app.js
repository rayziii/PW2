const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let lista = [];
let numeroAtual = null;

function reiniciarFila() {
    lista = [];

    for (let i = 1; i <= 10; i++) {
        lista.push(i);
    }
}

reiniciarFila();

app.get('/', (req, res) => {

   const senha = Math.floor(Math.random() * 10) + 1;

    res.render('index', {
        lista,
        numeroAtual,
        senha
    });
});

app.post('/chamar', (req, res) => {

    const senha = req.body.senha;

     if (lista.length > 0) {

        numeroAtual = lista.shift();

    } else {

        numeroAtual = "Fila encerrada";
        
    }
    res.render('index', {
        lista,
        numeroAtual,
        senha
    });
});

app.post('/reiniciar', (req, res) => {

    const senha = req.body.senha;

    reiniciarFila();
    numeroAtual = null;

    res.render('index', {
        lista,
        numeroAtual,
        senha
    });
});

app.listen(8081, () => {
    console.log('Servidor executando na porta 8081');
});