/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array
that includes both values that sum to 0 or undefined if pair does not exits
*/

//O(n) implementation with additional space complexity
//because we are storing passed indexes in object
function sumZero(arr) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i
        if (arr[i] < 0) {
            if (map[Math.abs(arr[i])])
                return [arr[i], Math.abs(arr[i])]
        } else if (arr[i] > 0) {
            if (map[-arr[i]])
                return [-arr[i], arr[i]]
        }
    }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
// console.log(sumZero([-2, 0, 1, 3]))
// console.log(sumZero([1, 2, 3]))

//O(n) implementation with improved logic
function sumZeroImproved(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0)
            return [arr[left], arr[right]]
        else if (sum > 0)
            right--
        else
            left++
    }
}

console.log(sumZeroImproved([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZeroImproved([-2, 0, 1, 3]))
console.log(sumZeroImproved([1, 2, 3]))