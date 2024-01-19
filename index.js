const add = async (a, b) => {
    return (a + b);
}

const sub = async (a, b) => {
    return (a - b);
}

const multiply = async (a, b) => {
    return (a * b);
}

const divide = async (a, b) => {
    return (a / b);
}

module.exports = {
    add,
    sub,
    multiply,
    divide,
};