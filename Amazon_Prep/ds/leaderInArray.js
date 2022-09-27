/**
 * Given an array A of positive integers. Your task is to find the leaders in the array. 
 * An element of array is leader if it is greater than or equal to all the elements to its right side. 
 * The rightmost element is always a leader. 
 * Input:
 * n = 6
 * A[] = {16,17,4,3,5,2}
 * Output: 17 5 2
 * Explanation: The first leader is 17 
 * as it is greater than all the elements
 * to its right.  Similarly, the next 
 * leader is 5. The right most element 
 * is always a leader so it is also 
 * included.
 * 
 * Input:
 * n = 5
 * A[] = {1,2,3,4,0}
 * Output: 4 0
 */

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    //Function to find the leaders in the array.    
    leaders(arr, n) {
        const result = []
        let currentMax = arr[n - 1]
        result.push(currentMax)
        for (let i = n - 2; i >= 0; i--) {
            if (currentMax <= arr[i]) {
                currentMax = arr[i]
                result.push(currentMax)
            }
        }
        return result.reverse()
    }
}