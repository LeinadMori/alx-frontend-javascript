function createInt8TypedArray(length, position, value) {
    const array = new Int8Array(length);

    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    array[position] = value;
    return array.buffer;
}

export default createInt8TypedArray;