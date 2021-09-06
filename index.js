const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/:nome/:lang', (req, res) => {
  const nome = "Gabriel";
  const lang = "Javascript";
  const showMsg = false;

  const products = [
    { product: 'Doritos', price: 3.4 },
    { product: 'Coke', price: 5 },
    { product: 'Milk', price: 10 },
  ]

  res.render('index', {
    nome,
    lang,
    msg: showMsg,
    products
  });
})

app.listen(8080, () => {
  console.log('Aplicação rodando!')
})