const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { 
        nome: null,
        dataNascimento: null,
        genero: null,
        estadoCivil: null,
        cep: null,
        logradouro: null,
        numero: null,
        complemento: null,
        cidade: null,
        estado: null,
        cpf: null,
        rg: null,
        email: null,
        telefone: null  
    });
});

app.post('/enviarContato', (req, res) => {

        const nome = req.body.nome;
        const dataNascimento = req.body.dataNascimento;
        const genero = req.body.genero;
        const estadoCivil = req.body.estadoCivil;
        const cep = req.body.cep;
        const logradouro = req.body.logradouro;
        const numero = req.body.numero;
        const complemento = req.body.complemento;
        const cidade = req.body.cidade;
        const estado = req.body.estado;
        const cpf = req.body.cpf;
        const rg = req.body.rg;
        const email = req.body.email;
        const telefone = req.body.telefone;

        res.render('enviarContato', {
            nome: nome,
            dataNascimento: dataNascimento,
            genero: genero,
            estadoCivil: estadoCivil,
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            cidade: cidade,
            estado: estado,
            cpf: cpf,
            rg: rg,
            email: email,
            telefone: telefone
        }
    );
        
    }
);

app.listen(8082, () => 
    console.log("Servidor executando na porta 8082")
);