function cleanSet(set, startString) {
    if (!(set instanceof Set)) {
        throw new Error('First argument must be a Set');
    }
    if (typeof startString !== 'string') {
        throw new Error('Second argument must be a string');
    }

    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    const cleanedValues = filteredValues.map(value => value.substring(startString.length));
    return cleanedValues.join('-');
}

export default cleanSet;