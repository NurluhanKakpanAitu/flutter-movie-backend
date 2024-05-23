const News = require('../models/news');

const getAllNews = async () => {
    return await News.findAll();
}

const getNewsById = async (id) => {
    return await News.findByPk(id);
}


const createNews = async (title,content,author,date,image) => {
    return await News.create({
        title,
        content,
        author,
        date,
        image
    });
}


const updateNews = async (id,title,content,author,date,image) => {
    return await News.update({
        title,
        content,
        author,
        date,
        image
    },{
        where: {
            id
        }
    });
}


const deleteNews = async (id) => {
    return await News.destroy({
        where: {
            id
        }
    });
}

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
}