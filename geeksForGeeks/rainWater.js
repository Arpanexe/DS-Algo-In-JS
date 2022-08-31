/*
Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
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
Explanation:
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.

Input:
N = 3
arr[] = {6,9,9}
Output:
0
Explanation:
No water will be trapped.
 */

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n) {

        // left[i] contains height of tallest bar to the
        // left of i'th bar including itself
        let left = new Array(n);

        // Right [i] contains height of tallest bar to
        // the right of ith bar including itself
        let right = new Array(n);

        // Initialize result
        let water = 0;

        // Fill left array
        left[0] = arr[0];
        for (let i = 1; i < n; i++)
            left[i] = Math.max(left[i - 1], arr[i]);

        // Fill right array
        right[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--)
            right[i] = Math.max(right[i + 1], arr[i]);

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
//solution.trappingWater([3, 0, 0, 2, 0, 4], 6)
solution.trappingWater([8, 8, 2, 4, 5, 5, 1], 7)