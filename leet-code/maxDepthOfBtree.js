/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Input: root = [1,null,2]
 * Output: 2
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    console.log(JSON.stringify(root))
    let count = 0, maxCount = 0
    function dfs(root, count) {
        if (root === null) {
            maxCount = Math.max(count, maxCount)
        } else {
            count++
            dfs(root.left, count)
            dfs(root.right, count)
        }

    }
    dfs(root, count)
    return maxCount
}

maxDepth({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
)