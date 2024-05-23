const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('flutter-movie-db', 'admin', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    logging: false,
});

module.exports = { sequelize };
