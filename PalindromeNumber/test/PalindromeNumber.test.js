const expect = chai.expect;

describe("PalindromeNumber", function() {
    it(`Input: 121 | Output: true`, function() {
        const input = 121;
        const expectedOutput = true;
        const actualResult = palindromeNumber(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: -121 | Output: false | From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.`, function() {
        const input = -121;
        const expectedOutput = false;
        const actualResult = palindromeNumber(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: 10 | Output: false`, function() {
        const input = 10;
        const expectedOutput = false;
        const actualResult = palindromeNumber(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: -101 | Output: false`, function() {
        const input = -101;
        const expectedOutput = false;
        const actualResult = palindromeNumber(input);
        expect(actualResult).to.eql(expectedOutput);
    });

});