export type Condition<T> = (model: T) => T | boolean;
export type ConditionTube = <T>(predicate: (param?: T) => boolean) => Condition<T>;

export const condition: ConditionTube =
    <T>(predicate: (param?: T) => boolean): Condition<T> =>
    (model): boolean =>
        predicate(model);
