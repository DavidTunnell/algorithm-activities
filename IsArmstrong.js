/* Create a function that takes a positive integer and returns `true` if the integer is an armstrong number, else return `false`.
 * To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits.
 * If the sum equals the original number, the number is an armstrong number.
 */
var num = 153; //true, since (1^3) + (5^3) + (3^3) === 153
var num2 = 11; //false, since (1^2) + (1^2) !== 11

var isArmstrong = function (num) {
    const stringNum = num.toString();
    const numLength = stringNum.length;
    var total = 0;
    for (let i = 0; i < numLength; i++) {
        total += stringNum[i] ** numLength;
    }
    return total === num;
};

console.log(isArmstrong(num));
console.log(isArmstrong(num2));
