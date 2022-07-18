import { first } from './first';

describe('first', () => {
    it('should exist', () => {
        expect(typeof first).toBe('function');
    });

    it('should first return first item form arr', () => {
        const arr = [1, 2];
        expect(first(arr)).toEqual(arr[0]);
    });
});
