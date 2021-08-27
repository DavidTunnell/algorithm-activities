/** 
 * https://app.codesignal.com/test/c4osXxYH4rTzSqRN5/task/G4zcahXFJEmzeyqfH
 * Find the smallest prime number strictly greater than the given n.
 * A positive integer that cannot be formed by multiplying together two smaller positive integers. In other words, it's a number n > 1 that can only be evenly divided by 1 and n itself.
 * For n = 7, the output should be nextPrime(n) = 11;
 * For n = 12, the output should be nextPrime(n) = 13.
 */
const a = 1;
const b = 238;
const c = 7;
const d = 12;


var nextPrime = function(n) {
    //if 1 the algorithm below will go on forever so return 2 instead of running the rest 
    if (n == 1) {
        return 2;
    }
    let startNumberToCheck = n + 1;
    while (true) {
        for (let i = 2; i < startNumberToCheck; i++) {
            if (startNumberToCheck % i == 0) {
                startNumberToCheck++;
                break;
            } else if (i == (startNumberToCheck - 1) && startNumberToCheck % i != 0) { //if you get to the last number to check and it still doesn't divide, it's a prime number
                return startNumberToCheck;
            }
        }
    };
}
console.log(nextPrime(a));
console.log(nextPrime(b));
console.log(nextPrime(c));
console.log(nextPrime(d));