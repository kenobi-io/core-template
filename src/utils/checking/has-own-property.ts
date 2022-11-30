export const hasOwnProperty = (context: unknown, property: string | number | symbol): boolean =>
    Object.prototype.hasOwnProperty.call(context, property);
