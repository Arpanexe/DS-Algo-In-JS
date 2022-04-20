/**
 * Binary search tree is not good when data is inserted in sorted order (asc or desc)
 * It will create one sided tree and searching/insertion would be O(n)
 * In best/average scenario searching and insertion would be O(log n)
 * 
 * Breadth First Search:
 * Not good when there are many nodes in trees or tree is wide, since it will increase the space complexity.
 * 
 * Depth First Search:
 * Good when there are many nodes in trees or tree is wide, since we are not storing nodes(when using recursively recursive call do keep in memory) so space complexity is less then BFS
 * 
 * DFS InOrder:
 * Good when you want nodes to be in sorted order(Ascending)
 * 
 * DFS PreOrder:
 * Good when you want to export/flat the tree structure, so that it is easily reconstructed. Order is as per the tree structure i.e from root->left->right
 */

const Queue = require('./queue')

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        let current = this.root
        if (!this.root) {
            this.root = node
        } else {
            while (current) {
                if (value > current.value) {
                    if (!current.right) {
                        current.right = node
                        break
                    }
                    current = current.right
                }
                else if (value < current.value) {
                    if (!current.left) {
                        current.left = node
                        break
                    }
                    current = current.left
                } else {
                    return undefined
                }
            }
        }
        console.log(`Value: ${value} inserted in BST`)
        return this
    }

    find(value) {
        if (!this.root)
            return false
        let current = this.root
        let isFound = false
        while (current && !isFound) {
            if (value === current.value) isFound = true
            else if (value > current.value) {
                current = current.right
            } else if (value < current.value) {
                current = current.left
            }
        }
        return current || false
    }

    bfsTraversal() {
        const visitedElements = []
        const queue = new Queue()
        let visitedNode = this.root
        queue.enQueue(visitedNode)
        while (queue.size) {
            visitedNode = queue.deQueue().value
            visitedElements.push(visitedNode.value)
            if (visitedNode.left) queue.enQueue(visitedNode.left)
            if (visitedNode.right) queue.enQueue(visitedNode.right)
        }
        console.log(`BST: ${JSON.stringify(visitedElements)}`)
        return visitedElements
    }

    dsfPreOrderTraversalByRecursion() {
        const visitedElements = []
        function traverse(node) {
            visitedElements.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        if (this.root) traverse(this.root)
        console.log(`DFS PreOrder Recursion: ${JSON.stringify(visitedElements)}`)
        return visitedElements
    }

    dsfPreOrderTraversalByLoop() {
        const visitedElements = []
        const stack = []
        if (this.root) stack.push(this.root)
        while (stack.length) {
            let node = stack.pop()
            visitedElements.push(node.value)
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
        }
        console.log(`DFS PreOrder Loop: ${JSON.stringify(visitedElements)}`)
        return visitedElements
    }

    dsfPostOrderTraversalByRecursion() {
        const visitedElements = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visitedElements.push(node.value)
        }
        if (this.root) traverse(this.root)
        console.log(`DFS PostOrder Recursion: ${JSON.stringify(visitedElements)}`)
        return visitedElements
    }

    dsfInOrderTraversalByRecursion() {
        const visitedElements = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            visitedElements.push(node.value)
            if (node.right) traverse(node.right)
        }
        if (this.root) traverse(this.root)
        console.log(`DFS InOrder Recursion: ${JSON.stringify(visitedElements)}`)
        return visitedElements
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(4)
bst.insert(12)
// console.log(bst.find(3))
// console.log(bst.find(4))
// console.log(bst.find(10))
// console.log(bst.find(12))
// console.log(bst.find(16))
//bst.bfsTraversal()
bst.dsfPreOrderTraversalByRecursion()
//bst.dsfPreOrderTraversalByLoop()
//bst.dsfPostOrderTraversalByRecursion()
//bst.dsfInOrderTraversalByRecursion()