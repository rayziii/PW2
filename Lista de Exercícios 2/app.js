const express = require ('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

//ler os dados no formulario
app.use(express.urlencoded({extended: true}));

//renderiza o formulario
app.get('/', (req, res) => {
    res.render('index', {nome: null, email: null, assunto: null, mensagem: null});
})

//recebe os dados
app.post('/enviarContato', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const assunto = req.body.assunto;
    const mensagem = req.body.assunto;

    res.render('index', {nome, email, assunto, mensagem});
});

//pagina do carro

app.get('/carro', (req, res) => {
    res.render('carro', {modelo: null, marca: null, ano: null, cor: null, valor: null, corTexto: "black"});
})

app.post('/dadosCarro', (req, res) => {
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const ano = req.body.ano;
    const cor = req.body.cor;
    const valor = req.body.valor;

    let corTexto = "black";

    if (valor > 100000) {
        corTexto = "red";
    } else {
        corTexto = "blue";
    }

    res.render('carro', {modelo, marca, ano, cor, valor, corTexto});
});

//pagina do fibonacci

app.get('/fibonacci', (req, res) => {
    res.render('fibonacci', { resultado: null });
});

app.post('/fibonacci', (req, res) => {
    const numero = Number(req.body.numero);

    let anterior = 0;
    let atual = 1;
    let resultado = "";

    for (let i = 0; i < numero; i++) {
        resultado = resultado + anterior + " ";

        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    res.render('fibonacci', { resultado });
})

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);
