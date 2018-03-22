const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'bob';
        const text = 'my message';
        const message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.created_at).toBe('number');
    });

    
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        const from = 'john';
        const latitude = 1;
        const longitude = 1;
        const message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).toBe(from);
        expect(message.url).toBe(`http://www.google.com/maps?q=${latitude},${longitude}`);
    });
});