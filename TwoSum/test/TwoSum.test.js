const expect = chai.expect;

describe("TwoSum", function() {
    it(`Input: nums = [2,7,11,15], target = 9 | Output: Because nums[0] + nums[1] == 9, we return [0, 1].`, function() {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expectedOutput = [0, 1];
        const actualResult = twoSum(nums, target);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: nums = [3,2,4], target = 6 | Output: Because nums[1] + nums[2] == 6, we return [1, 2].`, function() {
        const nums = [3, 2, 4];
        const target = 6;
        const expectedOutput = [1, 2];
        const actualResult = twoSum(nums, target);
        expect(actualResult).to.eql(expectedOutput);
    });

    it(`Input: nums = [3,3], target = 6 | Output: Because nums[0] + nums[1] == 6, we return [0, 1].`, function() {
        const nums = [3, 3];
        const target = 6;
        const expectedOutput = [0, 1];
        const actualResult = twoSum(nums, target);
        expect(actualResult).to.eql(expectedOutput);
    });
});