import { isPromise } from './is-promise';


describe('isPromise', () => {
    it('should exist', () => {
        expect(typeof isPromise).toBe('function');
    });

    it('should isPromise return false', () => {
        expect(isPromise<null>(null)).toEqual(null);
        expect(isPromise<undefined>(undefined)).toEqual(undefined);
        expect(isPromise<boolean>(() => new Promise(() => true))).toEqual(false);
        expect(isPromise<object>({ subscribe: () => {}})).toEqual(false);
        expect(isPromise<object>({ then: {}})).toEqual(false);
    });
    it('should isPromise return true', () => {
        expect(isPromise<boolean>(new Promise(() => true))).toEqual(true);
    });
});
