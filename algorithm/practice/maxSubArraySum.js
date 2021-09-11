/*
Write a function called maxSubArraySum which accepts an array of integers and a number
called n. The function should calculate the maximum sum of n consecutive elements in the 
array.
 */

// Naive solution O(n^2) 
function maxSubArraySumNaive(arr, num) {
    if (arr.length === 0)
        return null
    let maxSum = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let tempSum = 0
        for (let j = i; j < i + num; j++) {
            tempSum += arr[j]
        }
        if (tempSum > maxSum)
            maxSum = tempSum
    }
    return maxSum
}

console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubArraySumNaive([4, 2, 1, 6], 1)) //6
console.log(maxSubArraySumNaive([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySumNaive([], 4)) // null

// Optimized solution O(n) 
function maxSubArraySum(arr, num) {
    if (arr.length === 0)
        return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubArraySum([4, 2, 1, 6], 1)) //6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySum([], 4)) // null