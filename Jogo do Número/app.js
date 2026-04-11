const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/teste', (req, res) => {

    let numero = parseInt(req.body.numero);
    let tentativas = parseInt(req.body.tentativas) || 0;

    // se nao tiver ele adiciona um numero de 1 a 6
    if (!numero) {
        numero = Math.floor(Math.random() * 6) + 1;
    }

    let num = parseInt(req.body.num);
    tentativas++;

    let resultado;

    if (num == numero) {
        return res.render('acertou', { numero });
        numero = '';
        tentativas = 0;

    } else if (num < numero) {
        resultado = "Tente um número maior.";

    } else {
        resultado = "Tente um número menor.";
    }

    // teste se o usuario fizer 3 tentativas e nao acertar
    if (tentativas === 3) {
        return res.render('perdeu', { numero });
        numero = '';
        tentativas = 0;
    }

    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="css/style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        </head>
            <body>

                <form action="/teste" method="POST">
                     <p>${resultado}</p>

                    <div class="pedido">
                        <input type="number" name="num" required>
                    </div>

                    <input type="hidden" name="numero" value="${numero}">
                    <input type="hidden" name="tentativas" value="${tentativas}">

                    <button type="submit">Tentar novamente</button>

                    <a href="/">Reiniciar o jogo</a>

                    <div class="gato2">
                    <img src="/images/gato2.gif" class="gato">
                    </div>
                    
                </form>

            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});