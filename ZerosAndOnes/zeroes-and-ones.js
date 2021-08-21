// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

// var str = "00110011";
// var str2 = "010101011";
// var str3 = "01";

const zeroesAndOnes = function(str) {
    let totalZeros = 0;
    let totalOnes = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 0) {
            totalZeros++;
        }
        if (str[i] != 1) {
            totalOnes++;
        }
    }
    return (totalZeros === totalOnes);
};

// console.log(zeroesAndOnes(str));
// console.log(zeroesAndOnes(str2));
// console.log(zeroesAndOnes(str3));