const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get('/:nome/:lang', (req, res) => {
  const nome = "Gabriel";
  const lang = "Javascript";
  const showMsg = false;

  res.render('index', {
    nome,
    lang,
    msg: showMsg
  });
})

app.listen(8080, () => {
  console.log('Aplicação rodando!')
})