function hasValuesFromArray(set, arr) {
    if (!(set instanceof Set)) {
    throw new Error('First argument must be a Set');
}
if (!Array.isArray(arr)) {
    throw new Error('Second argument must be an array');
}
return arr.every(element => set.has(element));
}

export default hasValuesFromArray;