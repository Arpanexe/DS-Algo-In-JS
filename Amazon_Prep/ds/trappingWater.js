/*
Given an array arr[] of N non-negative integers representing the height of blocks. 
If width of each block is 1, compute how much water can be trapped between the blocks 
during the rainy season. 

Input:
N = 6
arr[] = {3,0,0,2,0,4}
Output:
10

Input:
N = 4
arr[] = {7,4,0,9}
Output:
10

Input:
N = 3
arr[] = {6,9,9}
Output:
0

https://practice.geeksforgeeks.org/problems/trapping-rain-water/0
*/

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n) {
        n = n ? n : arr.length
        // left[i] contains height of tallest bar to the
        // left of i'th bar including itself
        const left = []

        // Right [i] contains height of tallest bar to
        // the right of ith bar including itself
        const right = []
        let water = 0
        // Fill right array
        left[0] = arr[0]
        for (let i = 1; i < arr.length; i++) {
            left[i] = Math.max(arr[i], left[i - 1])
        }
        // Fill right array
        right[n - 1] = arr[n - 1]
        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(arr[i], right[i + 1])
        }

        // Calculate the accumulated water element by element
        // consider the amount of water on i'th bar, the
        // amount of water accumulated on this particular
        // bar will be equal to min(left[i], right[i]) - arr[i] .
        for (let i = 0; i < n; i++)
            water += Math.min(left[i], right[i]) - arr[i];

        return water;
    }
}

const solution = new Solution()
//solution.trappingWater([7, 4, 0, 9], 4)
solution.trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])