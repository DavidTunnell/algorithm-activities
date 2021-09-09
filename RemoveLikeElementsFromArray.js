/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * https://leetcode.com/problems/remove-element/
 */
var nums = [3,2,2,3];
var val = 3;
var nums2 = [0,1,2,2,3,0,4,2];
var val2 = 2;

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


console.log(removeElement(nums, val));
console.log(removeElement(nums2, val2));