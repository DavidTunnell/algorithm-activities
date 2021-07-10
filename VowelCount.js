/*    - Return the number of vowels present in `str`.
 */

function vowelCount(str) {
    var vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}

function main() {
    var returnedVowelCount = vowelCount("Welcome to my home in Mississippi.");
    console.log(returnedVowelCount);
}

main();