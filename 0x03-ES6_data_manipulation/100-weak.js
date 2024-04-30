const weakMap = new WeakMap();
function queryAPI(endpoint) {
    if (typeof endpoint !== 'object' || !('protocol' in endpoint) || !('name' in endpoint)) {
        throw new Error('Endpoint must be an object with "protocol" and "name" properties');
    }
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }
}

export { weakMap, queryAPI };
