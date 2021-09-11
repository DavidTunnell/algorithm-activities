/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * https://leetcode.com/problems/search-insert-position/
 */
var nums = [1,3,5,6];
var val = 5; //2 - where it is
var val2 = 2; //1 - where it would go
var val3 = 7; //4 - where it would go
var val4 = 0; //0 - where it would go
var nums2 = [1];
var val5 = 0; //0 - where it would go


var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target || nums[i] > target) {
            return i;
        }
    }
    return nums.length; //else add to end
};


console.log(searchInsert(nums, val));
console.log(searchInsert(nums, val2));
console.log(searchInsert(nums, val3));
console.log(searchInsert(nums, val4));
console.log(searchInsert(nums2, val5));