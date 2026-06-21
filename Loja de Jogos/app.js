const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Para ler dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));

// Rota principal: Renderiza o formulário
app.get('/', (req, res) => {
    res.render('index', { 
        nome: null, 
        email: null,
        nascimento:null,
        estado:null       
    });
});

//importar a lista de um outro arquivo
const produtos = require('./lista-produtos.js');

app.get('/produtos',(req,res)=>{

    //res.json(produtos)

    res.render('produtos',{
        listaProdutos:produtos
    });    
});

// Rota POST: Recebe os dados enviados
app.post('/enviarContato', (req, res) => {
    const nome = req.body.nome  
    const email = req.body.email    
    const nascimento = req.body.nascimento
    const estado = req.body.estado
            
    res.render('index',{
            nome:nome,
            email:email,
            nascimento:nascimento,
            estado:estado            
        }        
    );
});

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);