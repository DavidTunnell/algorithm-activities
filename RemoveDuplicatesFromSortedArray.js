/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Update the array that comes in and return the number k that is left.
 * 
 * Return k after placing the final result in the first k slots of nums.
 */
var nums = [1, 1, 2];
var nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var nums3 = [0, 0, 0, 0, 0];

const removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let f = 0; f < nums.length; f++) {
            if (i !== f && nums[i] === nums[f]) {
                nums.splice(f, 1);
                //since nums looses an array location go backwards one to make sure and check everything
                f--;
            }
        }
    }
    return nums.length;
};

const removeDuplicatesEfficient = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2]; //moving it forward
        }
    }
    //since in this case, above the order is being rearranged by pointers .length wont work.
    //pointer1 will be at the end so add one because it is an array location starting at zero
    return pointer1 + 1;
};

console.log(removeDuplicatesEfficient(nums));
console.log(nums);
console.log(removeDuplicatesEfficient(nums2));
console.log(nums2);
console.log(removeDuplicatesEfficient(nums3));
console.log(nums3);