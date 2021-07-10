// * If `num`is evenly divisible by 2, return the string `"even"`.
// * If `num` is not evenly divisible by 2, return the string `"odd"`.

function OddOrEven(num) {
    var result = num % 2;
    if (result === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function main() {
    console.log(OddOrEven(3)); //odd
    console.log(OddOrEven(1213122)); //even
    console.log(OddOrEven(87)); //odd
    console.log(OddOrEven(100)); //even
    console.log(OddOrEven(8763232412)); //even
}

main();