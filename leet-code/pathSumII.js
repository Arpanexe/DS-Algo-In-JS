/**
 * https://leetcode.com/problems/path-sum-ii/
 * 
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
 * Each path should be returned as a list of the node values, not node references.
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. 
 * A leaf is a node with no children.
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let pathSumRecursive = function (root, targetSum) {
    return traverse(root, targetSum, [], [])
};

function traverse(node, sum, subResult, result) {
    if (!node)
        return result
    subResult.push(node.val)
    if (!node.left && !node.right && node.val === sum) {
        result.push(subResult.slice())
    }
    traverse(node.left, sum - node.val, subResult, result)
    traverse(node.right, sum - node.val, subResult, result)

    subResult.pop()
    return result
}

let pathSumIterative = function (root, targetSum) {
    let subResult = []
    let result = []
    let stack = []
    let tempSum = targetSum
    if (root) {
        stack.push(root)
        while (stack.length) {
            let current = stack.pop()
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
            tempSum -= current.val
            subResult.push(current.val)
            if (!current.left && !current.right && tempSum === 0) {
                result.push(subResult.slice())
                subResult = [root.val]
                tempSum = targetSum - root.val
            }
            else if (!current.left && !current.right && tempSum !== current.val) {
                subResult.pop()
                tempSum += current.val
            }
        }
    }
    return result
}

//const input = { "val": 5, "left": { "val": 4, "left": { "val": 11, "left": { "val": 7, "left": null, "right": null }, "right": { "val": 2, "left": null, "right": null } }, "right": null }, "right": { "val": 8, "left": { "val": 13, "left": null, "right": null }, "right": { "val": 4, "left": { "val": 5, "left": null, "right": null }, "right": { "val": 1, "left": null, "right": null } } } }
const input = { "val": 1, "left": { "val": -2, "left": { "val": 1, "left": { "val": -1, "left": null, "right": null }, "right": null }, "right": { "val": 3, "left": null, "right": null } }, "right": { "val": -3, "left": { "val": -2, "left": null, "right": null }, "right": null } }
//pathSumRecursive(input, 22)
pathSumIterative(input, 3)
//console.log(pathSumRecursive(input, 3))

//[1, -2, -3, 1, 3, -2, null, -1]