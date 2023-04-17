import { CheckOperator } from './check-operator';
import { PredicateFn } from './predicate-fn';
import { ProjectionFn } from './projection-fn';

export const or: CheckOperator =
    <T>(...predicates: PredicateFn<T>[]): ProjectionFn<T> =>
    (value: T, index?: number): boolean =>
        predicates.some((predicate) => predicate(value), index);
