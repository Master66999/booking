import { isValidGuests } from './validation';

describe('Validation Functions', () => {
    test('isValidGuests returns true for valid guest numbers', () => {
        expect(isValidGuests(1)).toBe(true);
        expect(isValidGuests(5)).toBe(true);
        expect(isValidGuests(10)).toBe(true);
    });

    test('isValidGuests returns false for invalid guest numbers', () => {
        expect(isValidGuests(0)).toBe(false);
        expect(isValidGuests(11)).toBe(false);
        expect(isValidGuests(-1)).toBe(false);
    });
}); 