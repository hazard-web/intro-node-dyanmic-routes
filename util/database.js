const Sequelize  = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'nodeintro', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;