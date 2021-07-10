/*    
 * Return `true` if the given string is a palindrome.
 * Return `false` if the given string is not a palindrome.
 * var str = "racecar"; //true
 */

function isPalendrome(str) {
    //remove case and remove spaces to allow for sentences
    str = str.toLowerCase().replace(/\s/g, '');
    var isPalendrome = true;
    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] !== str[(str.length - 1) - i]) {
            isPalendrome = false;
        }
    }
    return isPalendrome;
}

function main() {
    var passedString = "Racecar";
    var returnedBool = isPalendrome(passedString);
    console.log("Passed String: " + passedString + " | Is a palendrome? " + returnedBool);

    var passedString2 = "palendrome";
    var returnedBool2 = isPalendrome(passedString2);
    console.log("Passed String: " + passedString2 + " | Is a palendrome? " + returnedBool2);

    var passedString3 = "Murder for a jar of red rum";
    var returnedBool3 = isPalendrome(passedString3);
    console.log("Passed String: " + passedString3 + " | Is a palendrome? " + returnedBool3);
}

main();