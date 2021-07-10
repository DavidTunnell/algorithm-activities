//Intro to Whiteboarding
//6. Find a Single Digit (Given a non-negative integer(num), repeatedly add all of its digits until the result has only one digit. Given(num) = 38, the process is 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.)

function breakUpInt(passedInt) {
    return Array.from(passedInt.toString()).map(Number); //https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
}

function singleDig(myInt) {
    var sum = 0;
    var digits = breakUpInt(myInt);
    if (digits.length != 1) {
        for (let index = 0; index < digits.length; index++) {
            const element = digits[index];
            sum += element;
        }
        return singleDig(sum);
        //if it is a single digit it wont hit that code block, it will go to the else and return there
        //if it is 2 digits it will hit return singleDig(sum)  and it will return whatever the next call of singleDig returns
        //if it is 3 digits it will hit return singleDig(sum)  and it will return whatever the next call of singleDig returns, which itself will be calling another singleDig which will return
    } else {
        return digits[0];
    }
}

function main() {
    console.log(singleDig(38)); //2
    console.log(singleDig(789)); //6
}

main();