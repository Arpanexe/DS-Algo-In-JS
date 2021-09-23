/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function (nums) {
    let unSortedCount = 0
    let i = 0
    while (i < nums.length - 1) {
        if (nums[i] >= nums[i + 1]) {
            unSortedCount++
            if (nums[i + 1] > (nums[i - 1] || -Infinity))
                nums[i] = nums[i + 1]
            else
                nums[i + 1] = nums[i]
        }
        i++
        if (unSortedCount > 1)
            return false
    }
    return true
}

//console.log(canBeIncreasing([100, 21, 100])) //true

console.log(canBeIncreasing([105, 924, 32, 968])) //true
console.log(canBeIncreasing([1, 2, 10, 5, 7])) //true
console.log(canBeIncreasing([2, 3, 1, 2])) //false
console.log(canBeIncreasing([1, 1, 1])) //false
console.log(canBeIncreasing([1, 1])) //true
console.log(canBeIncreasing([100, 21, 100])) //true