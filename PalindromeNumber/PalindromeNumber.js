/* https://leetcode.com/problems/palindrome-number/
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

const palindromeNumber = (num) => {
    const array = num.toString().split("");
    if (array[0] == "-") {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}