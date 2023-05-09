//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx] = nums[i];
            nums[i] = idx === i ? nums[i] : 0;
            idx++;
        }
    }
}

console.log(moveZeroes([0,1,0,3,12]))

const test = function test1() {
    console.log(`Hi`)
}

console.log(test.name)