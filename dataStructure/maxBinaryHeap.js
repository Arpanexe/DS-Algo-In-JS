/**
 * A binary heap is a heap data structure that takes the form of a binary tree.
 * Binary heap can be Min or Max heap
 * 
 * For each heap there can be two children only
 * For Min heap parent must be less than children
 * For Max heap parent must be greater than children
 * 
 * It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible).
 * This property of Binary Heap makes them suitable to be stored in an array.
 * 
 * A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, 
 * the key at root must be minimum among all keys present in Binary Heap. 
 * The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.
 * 
 * Following is implementation of Max binary heap.
 * 
 * Binary heaps are useful for sorting the data(Heap sort) and implementing other abstract data structure like priority queue.
 */
class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)
        this.findRightSpot()
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        console.log(`Value extracted: ${max}`)
        console.log(`Heap: ${JSON.stringify(this.values)}`)
        return max
    }

    sinkDown() {
        let index = 0
        const element = this.values[0]
        while (true) {
            let leftChildIndex = (index * 2) + 1
            let rightChildIndex = (index * 2) + 2
            let leftChild = this.values[leftChildIndex]
            let rightChild = this.values[rightChildIndex]
            let swap = null
            if (leftChildIndex < this.values.length && leftChild > element)
                swap = leftChildIndex
            if (rightChildIndex < this.values.length &&
                ((swap !== null && rightChild > leftChild) ||
                    (swap === null && rightChild > element))) swap = rightChildIndex
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
    findRightSpot() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            const parent = this.values[parentIndex]
            if (element <= parent) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
        console.log(`Value inserted at: ${index}`)
    }
}

const heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()