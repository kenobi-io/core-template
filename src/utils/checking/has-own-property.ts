export const hasOwnProperty = <T>(context: T, property: string | number | symbol): boolean =>
    Object.prototype.hasOwnProperty.call(context, property);
