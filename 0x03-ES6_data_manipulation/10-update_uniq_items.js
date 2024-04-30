function updateUniqueItems(itemsMap) {
    if (!(itemsMap instanceof Map)) {
        throw new Error('Cannot process. Argument must be a Map.');
    }

    const updatedMap = new Map();

    for (const [item, quantity] of itemsMap.entries()) {
        if (quantity === 1) {
            updatedMap.set(item, 100);
        } else {
            updatedMap.set(item, quantity);
        }
    }

    return updatedMap;
}

export default updateUniqueItems;