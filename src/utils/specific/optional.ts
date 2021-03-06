export type OutOptional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type Optional<T, K extends keyof T> = Pick<T, K> & Partial<T>;
