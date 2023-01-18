/**
 * https://leetcode.com/problems/same-tree/
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
    // p and q are both null
    if (!p && !q) return true
    // one of p and q is null
    if (!p || !q) return false  

    if (p.val != q.val) return false
    return isSameTree(p.right, q.right) &&
        isSameTree(p.left, q.left);
}