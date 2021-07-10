// * In this file you will be writing code in the body of each function defined to accomplish the following:
//   * `add` returns the result of `num1` plus `num2`.
//   * `subtract` returns the result of `num1` minus `num2`.
//   * `multiply` returns the result of `num1` times `num2`.
//   * `divide` returns the result of `num1` divided by `num2`.

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function main() {
    console.log(add(100, 101)); //201
    console.log(subtract(89898989, 2)); //89898987
    console.log(multiply(12, 12)); //144
    console.log(divide(20, 4)); //5
}

main();