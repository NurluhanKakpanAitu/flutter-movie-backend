const eventService = require('../services/event.service');

const Response = require('../utils/response');


const createEvent = async (req, res) => {
    const {userId,cinemaId,place,dateTime} = req.body;
    try {
        const eventId = await eventService.createEvent(userId,cinemaId,place,dateTime);
        Response.success(res, eventId);
    } catch (error) {
        Response.error(res, error);
    }
}


const getEvents = async (req, res) => {
    const {userId} = req.params;
    try {
        const events = await eventService.getEvents(userId);
        Response.success(res, events);
    } catch (error) {
        Response.error(res, error);
    }
}


module.exports = {
    createEvent,
    getEvents
}

