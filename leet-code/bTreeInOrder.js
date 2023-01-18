/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * Input: root = []
 * Output: []
 * 
 * Input: root = [1]
 * Output: [1]
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    let result = []
    if (root) {
        inOrder(root)
    }
    function inOrder(node) {
        if (node.left) inOrder(node.left)
        result.push(node.val)
        if (node.right) inOrder(node.right)
    }
    return result
}

const inorderTraversal = function (root) {
    const result = []
    let current = root
    let pre = null
    while (current) {
        if (!current.left) {
            result.push(current.val)
            current = current.right
        } else { // has a left subtree
            pre = current.left;
            while (pre.right) { // find rightmost
                pre = pre.right
            }
            pre.right = current; // put cur after the pre node
            let temp = current; // store cur node
            current = current.left; // move cur to the top of the new tree
            temp.left = null; // original cur left be null, avoid infinite loops
        }
    }
    return result
}
