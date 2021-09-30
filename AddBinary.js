/* Given two binary strings a and b, return their sum as a binary string.
 * https://leetcode.com/problems/add-binary/
 */
var a = "11";
var b = "1";
var a2 = "1010";
var b2 = "1011";
var a3 =
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
var b3 =
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

var addBinary = function (a, b) {
    //this solution looses precision on huge numbers
    // var aInt = bin_to_dec(a);
    // var bInt = bin_to_dec(b);
    // var sum = aInt + bInt;
    // var returnBinary = sum.toString(2);
    // return returnBinary;

    //use bigint
    //adding 0b to the beginning signifies binary prefix.
    var aInt = BigInt("0b" + a);
    var bInt = BigInt("0b" + b);
    var sum = aInt + bInt;
    //turn back into binary
    var returnBinary = sum.toString(2);
    return returnBinary;
};

console.log(addBinary(a, b));
console.log(addBinary(a2, b2));
console.log(addBinary(a3, b3));
