/*    - Print all even numbers from `0` up to the given `nums` argument, inclusive.
      - For example, given the number `6` as the `num` argument, the following should be printed to the console, one log at a time:

        0
        2
        4
        6

*/

function printEvenNumbers(num) {
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function main() {
    printEvenNumbers(81);
}

main();