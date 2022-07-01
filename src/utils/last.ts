/**
 * Return last item of the `arr` our `null` if arr is empty/undefined;
 *
 * @param arr array;
 * @returns `T | null`
 */
export const last = <T>(arr: Array<T>): T | null => (arr?.length > 0 ? arr[arr.length - 1] : null);
