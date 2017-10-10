var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
    it('Should generate the correct message object', () => {
        var messageObject = generateMessage('Dan', 'Hi');

        expect(messageObject.from).toBe('Dan');
        expect(messageObject.text).toBe('Hi');
        expect(messageObject.createdAt).toBeA('number');

    });

});