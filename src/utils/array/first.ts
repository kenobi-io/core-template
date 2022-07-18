/**
 * Return first item of the `arr` our `null` if arr is empty/undefined;
 *
 * @param arr array;
 * @returns `T | null`
 */
export const first = <T>(arr: Array<T>): T | null => (arr?.length > 0 ? arr[0] : null);
