/**
 * https://leetcode.com/problems/roman-to-integer/
 * Given a roman numeral, convert it to an integer.
 * 
 * 1 <= s.length <= 15
 * contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * 
 */
const a = "IV"; //4
const b = "IX"; //9
const c = "LVIII"; //58 - L = 50, V= 5, III = 3
const d = "MCMXCIV"; //1994 - M = 1000, CM = 900, XC = 90 and IV = 4.
const e = "III"; //3

const romanNumeralToInteger = function(str) {
    const lookUp = [{ symbol: "I", value: 1 }, { symbol: "V", value: 5 }, { symbol: "X", value: 10 },
        { symbol: "L", value: 50 }, { symbol: "C", value: 100 }, { symbol: "D", value: 500 }, { symbol: "M", value: 1000 }
    ]
    let sum = 0;
    const inputNumerals = str.split("");
    //if you encounter an I before V - both equal 4
    //if you encounter an I before X - both equal 9
    //if you encounter an X before L - both equal 40
    //if you encounter an X before C - both equal 90
    //if you encounter an C before D - both equal 400
    //if you encounter an C before M - both equal 900
    for (let i = 0; i < inputNumerals.length; i++) {
        //check if I, X, C 
        if (inputNumerals[i] == "I") {
            //check the value after to see if it's a V or X
            if (inputNumerals[i + 1] == "V") {
                sum += 4;
                i++;
            } else if (inputNumerals[i + 1] == "X") {
                sum += 9;
                i++;
            } else {
                sum += 1;
            }
        } else if (inputNumerals[i] == "X") {
            if (inputNumerals[i + 1] == "L") {
                sum += 40;
                i++;
            } else if (inputNumerals[i + 1] == "C") {
                sum += 90;
                i++;
            } else {
                sum += 10;
            }
        } else if (inputNumerals[i] == "C") {
            if (inputNumerals[i + 1] == "D") {
                sum += 400;
                i++;
            } else if (inputNumerals[i + 1] == "M") {
                sum += 900;
                i++;
            } else {
                sum += 100;
            }
        } else {
            var newArray = lookUp.filter(function(el) {
                return el.symbol == inputNumerals[i];
            });
            sum += newArray[0].value;
        }
    }
    return sum;
};

console.log(romanNumeralToInteger(d));