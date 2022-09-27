/**
 * Given an array A of n positive numbers. The task is to find the first Equilibrium Point in the array. 
 * Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
 * Note: Return the index of Equilibrium point. (1-based index)
 * 
 * Input: 
 * n = 5 
 * A[] = {1,3,5,2,2} 
 * Output: 3 
 * Explanation: For second test case 
 * equilibrium point is at position 3 
 * as elements before it (1+3) = 
 * elements after it (2+2). 
 * 
 * Input:
 * n = 1
 * A[] = {1}
 * Output: 1
 * Explanation:
 * Since its the only element hence
 * its the only equilibrium point.
 */

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n) {
        if (n === 1) return n
        let leftIndex = 0
        let rightIndex = n - 1
        let leftSum = a[0]
        let rightSum = a[n - 1]
        while (leftIndex < rightIndex) {
            if (leftSum < rightSum) {
                leftIndex++
                leftSum += a[leftIndex]
            } else if (leftSum > rightSum) {
                rightIndex--
                rightSum += a[rightIndex]
            } else {
                leftIndex++
                rightIndex--
                leftSum += a[leftIndex]
                rightSum += a[rightIndex]
            }
        }
        if (leftSum !== rightSum || leftIndex > rightIndex) return -1
        return leftIndex + 1
    }
}

const solution = new Solution()
//solution.equilibriumPoint([1, 3, 5, 2, 2], 5)
//solution.equilibriumPoint([4, 42, 27, 16, 28, 3, 4, 5, 9, 3, 31, 5, 5, 29, 10, 18, 35, 35, 33, 19, 41, 23, 8, 32, 9, 5, 8, 18, 35, 13, 6, 7, 6, 10, 11, 13, 37, 2, 25, 7, 28, 43], 42)
solution.equilibriumPoint([26, 26], 2)