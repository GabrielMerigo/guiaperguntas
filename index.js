const express = require('express');
const app = express();
const connection = require('./database/database');
const Question = require('./database/Question');

connection
  .authenticate()
  .then(() => {
    console.log('conexão feita com o banco de dados!');
  })
  .catch(() => {
    console.log('Ocorreu um erro!');
  })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  Question.findAll({ raw: true, order: [
    ['id', 'DESC']
  ]}).then(perguntas => {
    res.render('index', {
      perguntas
    });
  });
})

app.get('/perguntar', (req, res) => {
  res.render("perguntar");
})

app.post('/savequestion', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  Question.create({
    title,
    description
  }).then(() => {
    res.redirect("/")
  });
})

app.get('/pergunta/:id', (req, res) => {
  const id = req.params.id;
})

app.listen(8080, () => {
  console.log('Aplicação rodando!')
})