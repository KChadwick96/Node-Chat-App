const generateMessage = (from, text) => {
    return {
        from,
        text,
        created_at: new Date()
    }
}

const generateLocationMessage = (from, latitude, longitude) => {
    const url = `http://www.google.com/maps?q=${latitude},${longitude}`;
    return {
        from,
        url,
        created_at: new Date()
    }
}

module.exports = {generateMessage, generateLocationMessage};