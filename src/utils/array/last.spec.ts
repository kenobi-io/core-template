import { last } from './last';


describe('last', () => {
    it('should exist', () => {
        expect(typeof last).toBe('function');
    });

    it('should last return last item form arr', () => {
        const arr = [1, 2];
        expect(last(arr)).toEqual(arr[arr.length -1]);
    });
});
