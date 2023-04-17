import { CheckOperator } from './check-operator';
import { PredicateFn } from './predicate-fn';
import { ProjectionFn } from './projection-fn';

export const not: CheckOperator =
    <T>(...predicates: PredicateFn<T>[]): ProjectionFn<T> =>
    (value: T, index?: number): boolean =>
        predicates.every((predicate) => !predicate(value), index);
