// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

const isPerfectSquare = (num) => {
    //iterates and checks if any value below it multiplied by itself equals the value passed in
    for (let i = 0; i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }
    return false;
}