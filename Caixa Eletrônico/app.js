const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { notas: null });
});

app.post('/saida', (req, res) => {
    let valor = parseInt(req.body.valor);
    let valorOriginal = valor;

    const notasDisponiveis = [200, 100, 50, 20, 10, 5, 2, 1];

    let resultado = [];

    // percorre todas as notas de 200 a 1
    for (let nota of notasDisponiveis) {

        // calcula quantas notas cabem
        let quantidade = Math.floor(valor / nota);

        // adiciona um objeto dentro do resultado (qual nota, quantas e a imagem)
        if (quantidade > 0) {
            resultado.push({
                nota: nota,
                quantidade: quantidade,
                imagem: `/images/nota${nota}.jpg`
            });

            valor = valor - (quantidade * nota);
        }
    }

    res.render('saida', { notas: resultado });
});

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);