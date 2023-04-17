import { CheckOperator } from './check-operator';
import { PredicateFn } from './predicate-fn';
import { ProjectionFn } from './projection-fn';

export const and: CheckOperator =
    <T>(...predicates: PredicateFn<T>[]): ProjectionFn<T> =>
    (value, index): boolean =>
        predicates.every((predicate: PredicateFn<T>) => predicate(value), index);
