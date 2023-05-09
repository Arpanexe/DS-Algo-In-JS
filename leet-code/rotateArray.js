/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

    let reverse = function (i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }
    reverse(0, nums.length - 1)//Reverse original array 7,6,5,4,3,2,1
    reverse(0, k - 1)//Reverse first part i.e 7,6,5 to 5,6,7
    reverse(k, nums.length - 1)//Reverse rest of the array 1,2,3,4
    //Whole array would be 7,6,5,1,2,3,4
    //console.log(nums)
}

rotate([1, 2, 3, 4, 5, 6, 7], 3)

// class Solution {
//     public void rotate(int[] nums, int k) {
//         // basic checks. Do not skip these
//         if (nums == null || nums.length < 2 || nums.length == k || k <= 0) {
//             return;
//         }

//         // trim the k to value of nums
//         int trimmedK = k > nums.length ? k % nums.length : k;

//         // first we rotate from 0 to nums.length -1
//         rotateInternal(0, nums.length - 1, nums);

//         // rotate first part from 0 to k - 1
//         rotateInternal(0, trimmedK - 1, nums);

//         // rotate second part from k to nums.length - 1
//         rotateInternal(trimmedK, nums.length - 1, nums);
//     }

//     private void rotateInternal(int startIndex, int endIndex, int[] nums) {
//         while (startIndex < endIndex) {
//             int temp = nums[startIndex];
//             nums[startIndex] = nums[endIndex];
//             nums[endIndex] = temp;
//             ++startIndex;
//             --endIndex;
//         }
//     }
// }
