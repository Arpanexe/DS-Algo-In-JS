/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    let diffMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (diffMap.has(target - nums[i])) {
            return [diffMap.get(target - nums[i]), i];
        }
        diffMap.set(nums[i], i);
    }
    return [];
};

twoSum([-3, 4, 3, 90], 0)