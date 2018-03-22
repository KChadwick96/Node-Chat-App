const expect = require('expect');

// isRealString

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const str = null;
        const result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        const str = '     ';
        const result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        const str = '  mystring  ';
        const result = isRealString(str);

        expect(result).toBe(true);
    });
});