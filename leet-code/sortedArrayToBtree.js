/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * 
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 * 
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBSTMy = function (nums) {
    const rootIndex = Math.floor(nums.length / 2)
    let leftIndex = rootIndex - 1
    let rightIndex = rootIndex + 1
    const root = new TreeNode(nums[rootIndex])
    let tempLeft = root
    let tempRight = root
    while (leftIndex > -1 || rightIndex < nums.length) {
        let leftValue = nums[leftIndex]
        let rightValue = nums[rightIndex]
        if (leftValue !== undefined) {
            tempLeft.left = new TreeNode(leftValue)
            tempLeft = tempLeft.left
        }
        if (rightValue !== undefined) {
            tempRight.right = new TreeNode(rightValue)
            tempRight = tempRight.right
        }
        leftIndex--
        rightIndex++
    }
    return root
}

const sortedArrayToBST = function (nums) {
    if (!nums.length) return null;
    let mid = Math.floor((nums.length) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}

//sortedArrayToBST([-10, -3, 0, 5, 9])
//sortedArrayToBST([-1, 0, 1, 2])
sortedArrayToBST([0, 1, 2, 3, 4, 5])