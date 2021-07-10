//Whiteboarding Interview Questions - https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/modules/whiteboarding-example/
//FizzBuzz (Create a for loop that iterates up to 100 while outputting "Fizz" at multiples of 3, "Buzz" at multiples of 5, and "FizzBuzz" at multiples of 3 and 5.)
//added bonus # of divisions

function fizzBuzz(myInt) {
    for (let index = 1; index <= myInt; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log(index + ": FizzBuzz (" + index / 15 + ")");
        } else if (index % 5 === 0) {
            console.log(index + ": Buzz (" + index / 5 + ")");
        } else if (index % 3 === 0) {
            console.log(index + ": Fizz (" + index / 3 + ")");
        } else {
            console.log(index.toString() + ": (None)");
        }
    }
}

function main() {
    fizzBuzz(100);
}

main();