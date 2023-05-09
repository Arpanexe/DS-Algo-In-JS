/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true
        else
            map[nums[i]] = true
    }
    return false
}

containsDuplicate([1, 2, 3, 1])