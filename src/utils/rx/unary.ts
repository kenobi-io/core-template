/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnaryFunction } from 'rxjs';

import { Finish } from './finish';

type Fn<T> = (model: T) => any;

export const unary =
    <T>(fn: Fn<T>, finish?: Finish): UnaryFunction<T, T> =>
    (input: T): T => {
        fn(input);

        if (finish) {
            return finish as T;
        }

        return input;
    };
