/* Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 * https://leetcode.com/problems/sqrtx/
 */
var a = 4; //2
var b = 8; //2 - The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
var c = 25; //5
var mySqrt = function (x) {
    //val * val = x is square root
    var val = 1;
    while (true) {
        var product = val * val;
        if (product > x) {
            return val - 1;
        } else {
            val++;
        }
    }
};

console.log(mySqrt(a));
console.log(mySqrt(b));
console.log(mySqrt(c));
