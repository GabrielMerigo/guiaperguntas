const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'flashzika2003', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;