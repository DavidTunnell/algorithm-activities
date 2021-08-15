const expect = chai.expect;

describe("ReverseInteger", function() {
    it(`Input: 123 | Output: 321`, function() {
        const input = 123;
        const expectedOutput = 321;
        const actualResult = reverseInteger(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: -123 | Output: -321`, function() {
        const input = -123;
        const expectedOutput = -321;
        const actualResult = reverseInteger(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: 120 | Output: 21`, function() {
        const input = 120;
        const expectedOutput = 21;
        const actualResult = reverseInteger(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: 0 | Output: 0`, function() {
        const input = 0;
        const expectedOutput = 0;
        const actualResult = reverseInteger(input);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: 1534236469 | Output: 0`, function() {
        const input = 1534236469;
        const expectedOutput = 0;
        const actualResult = reverseInteger(input);
        expect(actualResult).to.eql(expectedOutput);
    });
});