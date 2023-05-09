/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// const singleNumber = function (nums) {
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i - 1] !== nums[i] && nums[i + 1] !== nums[i])
//             return nums[i]
//     }
// }

const singleNumber = function (nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};

//singleNumber([2, 2, 1])
singleNumber([1, 2, 3, 4, 1, 3, 4])