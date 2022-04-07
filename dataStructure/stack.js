class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        this.size++
        console.log(`Value pushed in stack: ${value}`)
        return this.size
    }

    pop() {
        if (this.size === 0) return
        const poppedElement = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = poppedElement.next
            poppedElement.next = null
        }
        this.size--
        console.log(`Valued popped ${poppedElement.value}`)
        return poppedElement.value
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()