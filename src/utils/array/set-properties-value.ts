import { hasOwnProperty } from '../index';

export const setPropertiesValue = <
    T extends K,
    K extends Record<string | number | symbol, unknown>,
>(
    target: T,
    source: K,
): T => {
    const changing: Record<string | number | symbol, unknown> = target;
    Object.entries(source).map(([key, value]) => {
        if (value !== undefined && hasOwnProperty(changing, key)) {
            changing[key] = value;
        }
    });
    return target;
};
