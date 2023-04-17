/* eslint-disable @typescript-eslint/no-explicit-any */
import { identity, UnaryFunction } from 'rxjs';

import { finish } from './finish';

export function tube(): typeof identity;
export function tube<T, A>(fn1: UnaryFunction<T, A>): UnaryFunction<T, A>;
export function tube<T, A, B>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
): UnaryFunction<T, B>;
export function tube<T, A, B, C>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
): UnaryFunction<T, C>;
export function tube<T, A, B, C, D>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
): UnaryFunction<T, D>;
export function tube<T, A, B, C, D, E>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
): UnaryFunction<T, E>;
export function tube<T, A, B, C, D, E, F>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
    fn6: UnaryFunction<E, F | boolean>,
): UnaryFunction<T, F>;
export function tube<T, A, B, C, D, E, F, G>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
    fn6: UnaryFunction<E, F | boolean>,
    fn7: UnaryFunction<F, G | boolean>,
): UnaryFunction<T, G>;
export function tube<T, A, B, C, D, E, F, G, H>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
    fn6: UnaryFunction<E, F | boolean>,
    fn7: UnaryFunction<F, G | boolean>,
    fn8: UnaryFunction<G, H | boolean>,
): UnaryFunction<T, H>;
export function tube<T, A, B, C, D, E, F, G, H, I>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
    fn6: UnaryFunction<E, F | boolean>,
    fn7: UnaryFunction<F, G | boolean>,
    fn8: UnaryFunction<G, H | boolean>,
    fn9: UnaryFunction<H, I | boolean>,
): UnaryFunction<T, I>;
export function tube<T, A, B, C, D, E, F, G, H, I>(
    fn1: UnaryFunction<T, A | boolean>,
    fn2: UnaryFunction<A, B | boolean>,
    fn3: UnaryFunction<B, C | boolean>,
    fn4: UnaryFunction<C, D | boolean>,
    fn5: UnaryFunction<D, E | boolean>,
    fn6: UnaryFunction<E, F | boolean>,
    fn7: UnaryFunction<F, G | boolean>,
    fn8: UnaryFunction<G, H | boolean>,
    fn9: UnaryFunction<H, I | boolean>,
    ...fns: UnaryFunction<any, any>[]
): UnaryFunction<T, unknown>;
export function tube<T, A, B, C, D, E, F, G, H, I, J>(
    ...fns: UnaryFunction<any, any>[]
): UnaryFunction<T, unknown>;

/**
 * condition() can be called on one or more consts, each of which can take one argument ("UnaryFunction")
 * and uses it to return a value.
 * It returns a const that takes one argument, passes it to the first UnaryFunction, and then
 * passes the result to the next one, passes that result to the next one, and so on.
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function tube(...fns: Array<UnaryFunction<any, any>>): UnaryFunction<any, any> {
    return tubeFromArray(fns);
}

const tubeFromArray = <T, R>(fns: Array<UnaryFunction<T, R>>): UnaryFunction<T, R> => {
    if (fns.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return identity as UnaryFunction<any, any>;
    }

    if (fns.length === 1) {
        return fns[0];
    }

    const piped = (input: T): R =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        reducePassable(fns, (prev: any, fn: UnaryFunction<T, R>) => fn(prev), input as any);
    return piped;
};

const reducePassable = <T, R>(
    arr: T[],
    ...arg: any[] /* fn: Function, initial: any, bind: any */
): R => {
    const len = arr.length;
    let i = 0;
    let bind: T | null = null;

    if (arg.length > 1) {
        bind = arg[2] as T;
    }

    if (arg.length === 0 && typeof arg[0] !== 'function') {
        throw new TypeError(`arg[0] is not a function`);
    }

    if (len === 0 && arg.length === 1) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    let accumulator = (arg[1] || arr[i++]) as R;
    let nextIterationSkip = false;
    let prevAccumulator;
    // eslint-disable-next-line @typescript-eslint/ban-types
    const prevFn = arg[0] as Function;

    for (; i < len; i++) {
        if (nextIterationSkip) {
            nextIterationSkip = false;
            continue;
        }
        prevAccumulator = accumulator;
        accumulator = prevFn.call(bind, accumulator, arr[i], i, arr) as R;

        if (typeof accumulator == 'boolean') {
            if (accumulator) {
                nextIterationSkip = false;
            } else {
                nextIterationSkip = true;
            }
            accumulator = prevAccumulator;
        }

        if (accumulator === finish) {
            accumulator = prevAccumulator;
            break;
        }
    }

    return accumulator;
};
