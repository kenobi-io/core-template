import { PredicateFn } from './predicate-fn';
import { ProjectionFn } from './projection-fn';

export type CheckOperator = // <T>(...predicates: PredicateFn<T>[]): PredicateFn<T>;
    <T>(...predicates: PredicateFn<T>[]) => ProjectionFn<T>;
