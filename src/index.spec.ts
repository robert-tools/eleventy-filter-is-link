import fn from './index';

describe('fn()', () => {
    const FN = fn;
    it('should return true if the string is a valid link', () => {
        expect(FN('http://example.com')).toBe(true);
        expect(FN('https://example.com')).toBe(true);
        expect(FN('https://foo.example.com')).toBe(true);
        expect(FN('https://www.example.com')).toBe(true);
        expect(FN('https://www.example.com/')).toBe(true);
        expect(FN('https://www.foo.example.com/')).toBe(true);
        expect(FN('www.example.com')).toBe(true);
    });
    it('should return false if the string is not a valid link', () => {
        expect(FN('hello world')).toBe(false);
        expect(FN('example')).toBe(false);
        expect(FN(null)).toBe(false);
        expect(FN(undefined)).toBe(false);
        expect(FN(true)).toBe(false);
        expect(FN(false)).toBe(false);
        expect(FN(23)).toBe(false);
    });
});
