/**
 * Following Priority queue is implemented using min binary heap.   
 */
class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.values.push(node)
        this.findRightSpot()
    }
    findRightSpot() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            const parent = this.values[parentIndex]
            if (element.priority >= parent.priority) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
        console.log(`Value inserted at: ${index}`)
    }

    dequeue() {
        const element = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.rearrangeQueue()
        }
        console.log(`Value extracted: ${JSON.stringify(element)}`)
        console.log(`Queue: ${JSON.stringify(this.values)}`)
        return element
    }

    rearrangeQueue() {
        let index = 0
        const element = this.values[index]
        const length = this.values.length
        while (true) {
            let leftChildIndex = (2 * index) + 1
            let rightChildIndex = (2 * index) + 2
            let swap = undefined
            let leftChild = undefined
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority < element.priority) swap = leftChildIndex
            }
            if (rightChildIndex < length) {
                let rightChild = this.values[rightChildIndex]
                if ((swap !== undefined && rightChild.priority < leftChild.priority) ||
                    (swap === undefined && rightChild.priority < element.priority)) swap = rightChildIndex
            }
            if (swap === undefined) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

const ER = new PriorityQueue()
ER.enqueue('Corona', 1)
ER.enqueue('fever', 4)
ER.enqueue('common cold', 5)
ER.enqueue('wound', 2)
ER.dequeue()
ER.dequeue()
ER.dequeue()
ER.dequeue()
ER.dequeue()
