const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get("/index", (req, res) => {

    res.render("index"); 

});


app.get("/exercicio1", (req, res) => {

    let val = 500;
    let valorAju = val * 1.10;

    res.render("exercicio1", {
        valor: val,
        valorAjustado: valorAju.toFixed(2)
    });

});


app.get("/exercicio2", (req, res) => {

    let peso = 150;
    let altura = 1.75;
    let imc = peso / (altura * altura);

    let resposta;
    if (imc < 18.5) { 
        resposta = "Abaixo do peso"; 
    } else if (imc < 24.9) { 
        resposta = "Peso normal"; 
    } else if (imc < 29.9) { 
        resposta = "Levemente acima do peso"; 
    } else if (imc < 34.9) { 
        resposta = "Obesidade grau I"; 
    } else if (imc < 39.9) { 
        resposta = "Obesidade grau II (severa)"; 
    } else { 
        resposta = "Obesidade grau III (mórbida)"; 
    }

    res.render("exercicio2", {
        peso,
        altura,
        imc: imc.toFixed(2),
        mensagem: resposta
    });

});


app.get("/exercicio3", (req, res) => {

    let nota1 = 9; 
    let nota2 = 8; 
    let nota3 = 7; 
    let nota4 = 6; 
    let media = (nota1 + nota2 + nota3 + nota4) / 4; 
    let nome = "Hermenegildo"; 
    let status; 
    
    if (media >= 7) { 
        status = ("Aprovado."); 
    } else { 
        status = ("Reprovado.") 
    }

    res.render("exercicio3", {
        nota1,
        nota2,
        nota3,
        nota4,
        media,
        nome,
        status
    });

});

app.get("/exercicio4", (req, res) => {

    let valorProduto = 150;
    let valorPagar;
    let formaPagamento = 2;

    let nomesPagamento = {
        1: "Dinheiro ou Pix.",
        2: "Crédito à vista.",
        3: "Parcelado em duas vezes."
    }

    let escolhido = nomesPagamento[formaPagamento];


    if (formaPagamento == 1) {

        valorPagar = valorProduto * 0.85;

    } else if (formaPagamento == 2){

        valorPagar = valorProduto * 0.90;

    } else {

        valorPagar = valorProduto / 2;

    }

    res.render("exercicio4", {
        valorProduto,
        valorPagar: valorPagar.toFixed(2),
        formaPagamento : escolhido,
    });

});

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);