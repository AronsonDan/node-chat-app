const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should return true for a string', () => {
        var result = isRealString('abc');
        expect(result).toBe(true);
    });
    it('Should return true for a string with white spaces', () => {
        var result = isRealString(' abc  ');
        expect(result).toBe(true);
    });
    it('Should return false for empty string', () => {
        var result = isRealString('');
        expect(result).toBe(false);
    });
    it('Should return false for white spaces string', () => {
        var result = isRealString('         ');
        expect(result).toBe(false);
    });
    it('Should return false for invalid input', () => {
        var result = isRealString(10);
        expect(result).toBe(false);
    });
});