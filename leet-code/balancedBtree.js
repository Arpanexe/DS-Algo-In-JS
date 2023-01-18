/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * 
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 * 
 * Input: root = []
 * Output: true
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*First Let us take look at how solve this recursively. It's better to have a help function which get the height of node in tree.*/
const isBalanced = function (root) {
    if (root === null) { return true; }
    return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(height(root.left) - height(root.right)) < 2);
}
/*using helper function to get the height of the node*/
const height = function (root) {
    if (root === null) { return 0; }
    return Math.max(height(root.left), height(root.right)) + 1;
}

/* Then we try ti understand how it works in a regular iterative way*/
const isBalancedIterative = function (root) {
    if (root === null) { return true; }
    const stack = [root]
    while (stack.length > 0) {
        let current = stack.pop();
        if (Math.abs(heightIterative(current.left) - heightIterative(current.right)) > 1) { return false; }
        if (current.left !== null) { stack.push(current.left); }
        if (current.right !== null) { stack.push(current.right); }
    }
    return true;
};
const heightIterative = function (root) {
    let max = 0;
    if (root === null) {
        return max;
    }
    const stack = [[root, max + 1]];
    while (stack.length > 0) {
        let [current, level] = stack.pop();
        console.log(`Current node: ${current.val}`)
        max = Math.max(level, max);
        if (current.left !== null) { stack.push([current.left, level + 1]); }
        if (current.right !== null) { stack.push([current.right, level + 1]); }
    }
    return max;
}

//isBalanced({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } })
//isBalancedIterative({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } })
isBalancedIterative({ "val": 1, "left": { "val": 2, "left": { "val": 3, "left": { "val": 4, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 3, "left": null, "right": null } }, "right": { "val": 2, "left": null, "right": null } })