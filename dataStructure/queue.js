class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enQueue(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
        console.log(`Value enqueued: ${value}, Current size: ${this.size}`)
        return this.size
    }

    deQueue() {
        if (this.size === 0) return undefined
        const removedNode = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = removedNode.next
            removedNode.next = null
        }
        this.size--
        console.log(`Value dequeued: ${removedNode.value}, Current size: ${this.size}`)
        return removedNode
    }
}

module.exports = Queue

// const queue = new Queue()
// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// queue.enQueue(40)
// queue.enQueue(50)
// queue.deQueue()
// queue.deQueue()
// queue.deQueue()
// queue.deQueue()
// queue.deQueue()
// queue.deQueue()
