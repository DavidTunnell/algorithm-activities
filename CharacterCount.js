/* Create a function that does the following:
    - Create a new object.
    - Loop through each character in the given string and create a new key for each character in the string.
    - The value of the character's key should be the number of times it appears in the string.
    - See the following function for an example:
      { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 } 
*/

var charCount = myString => {
    //create empty object
    let keyValueObj = {};
    //iterate over string argument 
    for (let i = 0; i < myString.length; i++) {
        const currentChar = myString[i];
        let counter = 1;
        //compare the current char to each char in the string
        for (let j = 0; j < myString.length; j++) {
            const comparedChar = myString[j];
            //if they are the same and also the counters aren't on the same char, add to the counter
            if (currentChar == comparedChar && j != i) {
                counter++;
            }
        }
        //add key value pair to object with current char then number in counter variable
        keyValueObj[currentChar] = counter;
    }
    return keyValueObj;
}

function main() {
    const str = "Hello World!";
    const result = charCount(str);
    console.log(result);
}

main();