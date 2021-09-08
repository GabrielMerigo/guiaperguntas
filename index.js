const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.render("index");
})

app.get('/perguntar', (req, res) => {
  res.render("perguntar");
})

app.post('/savequestion', (req, res) => {
  console.log(req.body)
  const title = req.body.title;
  const descricao = req.body.description; 

  res.send(`Formulário recebido! Título: ${title} - Descrição: ${descricao}`);
})

app.listen(8080, () => {
  console.log('Aplicação rodando!')
})