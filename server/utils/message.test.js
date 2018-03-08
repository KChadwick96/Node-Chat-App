const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'bob';
        const text = 'my message';
        const message = generateMessage(from, text);
        console.log(message);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.created_at.getMonth).toBe('function');
    });
});