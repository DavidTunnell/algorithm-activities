//https://app.codesignal.com/test/3sGbPLqvjnpRR2wbT/task/vsHoEwc3Y5qTKCeKw
//Write a function that returns the input string with spaces between each letter.
//For the purpose of this assignment, you can assume that only strings will be passed as an input parameter

function gimmeSomeSpace(str) {
    let returnStr = "";
    for (let i = 0; i < str.length; i++) {
        returnStr += str[i] + " ";
    }
    //remove last char from string - Passing a negative number will remove starting from the end.
    return returnStr.slice(0, -1);
}

const str = "ThisprintstotheconsolewhenyouRunTests";
console.log(gimmeSomeSpace(str));
