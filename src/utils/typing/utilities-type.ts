export type OutBounden<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type Bounden<T, K extends keyof T> = Pick<T, K> & Partial<T>;
export type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;
export type Pacord<T, K> = Partial<Record<keyof T, K>>;
export type ExcludeOptional<T, K extends keyof T> = T & { [P in K]-?: T[P] };
