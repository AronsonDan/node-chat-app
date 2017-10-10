var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('Should generate the correct message object', () => {
        var messageObject = generateMessage('Dan', 'Hi');

        expect(messageObject.from).toBe('Dan');
        expect(messageObject.text).toBe('Hi');
        expect(messageObject.createdAt).toBeA('number');

    });

});
describe('generateLocationMessage', () => {
    it('Should generate the correct location object', () => {
        var from = 'Dan';
        var lat = 10;
        var lon = 20;
        url = 'https://www.google.com/maps?q=10,20';
        var locationObject = generateLocationMessage(from, lat, lon);

        expect(locationObject .from).toBe(from);
        expect(locationObject .url).toBe(url);
        expect(locationObject .createdAt).toBeA('number');

    });

});