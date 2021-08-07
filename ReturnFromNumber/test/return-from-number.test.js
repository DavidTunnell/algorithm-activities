var expect = chai.expect;

describe("linearSearch", function() {
    it("should return a negative version if number is passed", function() {
        // - Arrange -
        var arr = 1001.1337;
        var target = -1001.1337;
        // - Act - 
        var result = returnFromNumber(arr);
        // - Assert -
        expect(result).to.eql(target);
    });
    it("should return a positive version if negative number is passed", function() {
        // - Arrange -
        var arr = -42;
        var target = 42;
        // - Act - 
        var result = returnFromNumber(arr);
        // - Assert -
        expect(result).to.eql(target);
    });
    it("should throw an error if a non-number is passed", function() {
        // - Arrange -
        var arr = "Test";
        var target = 42;
        // - Act / Assert - 
        expect(function() { returnFromNumber(arr); })
            .to.throw(Error);
    });
});