const moment = require('moment');

const generateMessage = (from, text) => {
    return {
        from,
        text,
        created_at: moment().valueOf()
    }
}

const generateLocationMessage = (from, latitude, longitude) => {
    const url = `http://www.google.com/maps?q=${latitude},${longitude}`;
    return {
        from,
        url,
        created_at: moment().valueOf()
    }
}

module.exports = {generateMessage, generateLocationMessage};