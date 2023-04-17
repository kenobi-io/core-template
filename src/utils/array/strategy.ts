/**
 * This code exports a function called 'strategy'
 * which takes in a model, an optional strategies map,
 * and an optional kindof string.
 * The function will then check if the kindof string is present,
 * and if so, will use the strategies map to get the corresponding
 * method and apply it to the model. If no kindof string is present,
 * the model will be returned as is.
 */
export const strategy = <T>(
    model: T,
    strategies?: Map<string, (m: T) => T>,
    kindof?: string,
): T => {
    const method = kindof ? strategies?.get(kindof) : undefined;
    return method ? method(model) : model;
};
