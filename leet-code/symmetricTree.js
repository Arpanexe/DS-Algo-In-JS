/**
 * https://leetcode.com/problems/symmetric-tree/
 * 
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 * 
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
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
const isSymmetric = function (root) {
    if (!root) return true

    //As it's pre-order DFS, time complexity is O(n), and space complexity is O(1) 
    //if we ignore the recursion stack which is the height of the tree.
    function dfsRecursive(left, right) {
        if (!left && !right) return true

        if (!left || !right || left.val !== right.val) return false

        return dfsRecursive(left.left, right.right) && dfsRecursive(left.right, right.left)
    }

    //As it's pre-order DFS, time complexity is O(n), and space complexity is O(1) if we ignore the recursion stack which is the height of the tree.
    //The question asks us to implement the solution iteratively, and it's easy to convert the above preorder to make it traverse iteratively using stack:
    function dfsIterative(left, right) {
        let s1 = [left], s2 = [right]
        while (s1.length || s2.length) {
            let n1 = s1.pop()
            let n2 = s2.pop()

            if (!n1 && !n2) continue

            if (!n1 || !n2 || n1.val !== n2.val) return false

            s1.push(n1.left)
            s1.push(n1.right)
            s2.push(n2.right)
            s2.push(n2.left)
        }

        return true
    }

    function bsf(s, t) {
        let q1 = [s], q2 = [t];

        // Perform breadth-first search
        while (q1.length > 0 || q2.length > 0) {
            // Dequeue
            let n1 = q1.shift(), n2 = q2.shift();

            // Two null nodes, let's continue
            if (!n1 && !n2) continue;

            // Return false as long as there is a mismatch
            if (!n1 || !n2 || n1.val !== n2.val) return false;

            // Scan tree s from left to right
            // and scan tree t from right to left
            q1.push(n1.left)
            q1.push(n1.right)
            q2.push(n2.right)
            q2.push(n2.left)
        }

        return true;
    }

    return dfsRecursive(root.left, root.right)
    //return dfsIterative(root.left, root.right)
    //return bsf(root.left, root.right)
}

console.log(isSymmetric({ "val": 1, "left": { "val": 2, "left": { "val": 3, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } } }
))