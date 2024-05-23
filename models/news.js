const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../postgres.config');

const News = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    // options
});
sequelize.sync({ force: true }) // Caution: `force: true` will drop existing tables!
    .then(() => console.log('Tables created!'))
    .catch(err => console.error('Error creating tables:', err));

module.exports = News;


// title, content, author, date, image