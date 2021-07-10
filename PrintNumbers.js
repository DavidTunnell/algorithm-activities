/*
    * Print all numbers from `1` up to the given `nums` argument inclusive. For example, given the number `5` as the `num` argument, the following should be printed to the console, one log at a time:

      1
      2
      3
      4
      5
      
*/
function printNumbers(num) {
    for (let i = 0; i < num; i++) {
        console.log(i + 1);
    }
}

function main() {
    printNumbers(99);

}

main();