/*  * Return the factorial of the given `num` integer. EX: 4! = 4*3*2*1
    * Given the preceding number, the following should be returned:
      var num = 3;
      // 1 x 2 x 3 === 6
    * If given `0`, the factorial should be `1`. Otherwise, assume that the given number will be a whole positive number.
*/

function factorial(num) {
    if (num < -1) {
        return -1;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    //recursion to multiply itself minus 1 each time
    return (num * factorial(num - 1));

    //alternatively (multiple by counting backwards)
    // for (var i = num - 1; i >= 1; i--) {
    //     num *= i;
    // }
}

function main() {
    console.log(factorial(6));
}

main();