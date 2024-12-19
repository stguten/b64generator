async function responseBuilder(code, data) {
    return {
        code,
        data,
        timestamp: Date.now(),
    };
}

export default responseBuilder;