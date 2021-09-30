// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    var returnStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        returnStr += str[i];
    }
    return returnStr;
};

const rev = reverse("Welcome to my home in Mississippi.");
console.log(rev);
