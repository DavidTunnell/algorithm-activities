/*
    * Return a string identical to the given `str` string, but with the first letter of each word capitalized.
    * See the following string for an example:
      var str = "open a new browser tab";
    * Given the preceding string, the following should be returned: 
      "Open A New Browser Tab";
*/

function titleCase(string) {
    var returnString = "";
    for (let i = 0; i < string.length; i++) {
        //if the 1st char or preceded by a space, make uppercase
        if (i == 0 || string[i - 1] == " ") {
            returnString += string[i].toUpperCase();
        } else {
            returnString += string[i].toLowerCase();
        }
    }
    return returnString;
}

//alternatively break up each word into an array - https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase2(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function main() {
    console.log(titleCase("open a new browser tab"));
    console.log(titleCase2("open a new browser tab - split"));
}

main();