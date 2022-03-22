const Node = require('./node')

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return
        let current = this.head
        let prev = current
        while (current.next) {
            prev = current
            current = current.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (this.length === 0) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0)
            this.tail = null
        return currentHead
    }

    unshift(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            const currentHead = this.head
            this.head = node
            this.head.next = currentHead
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length)
            return null
        let current = this.head
        let counter = 0
        while (current && counter !== index) {
            counter++
            current = current.next
        }
        return current
    }

    set(index, value) {
        const current = this.get(index)
        if (current)
            current.value = value
        return current !== null
    }

    insert(index, value) {
        if (index < 0 || index >= this.length)
            return null

        const newNode = new Node(value)
        let current = this.head
        let prev = current
        let counter = 0
        while (current && counter !== index) {
            counter++
            prev = current
            current = current.next
        }
        prev.next = newNode
        newNode.next = current
        this.length++
        return newNode
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let previous = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = previous
            previous = node
            node = next
        }
        return this
    }

    traverse() {
        const array = []
        let current = this.head
        while (current) {
            array.push(current.value)
            current = current.next
        }
        console.log(JSON.stringify(array))
    }
}

const linkedList = new SinglyLinkedList()
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.push(40)
linkedList.push(50)
linkedList.traverse()
linkedList.reverse()
// //linkedList.unshift('First')
// linkedList.push('Hello')
// linkedList.push('my')
// linkedList.push('name')
// linkedList.push('is')
// linkedList.push('Arpan')
// //linkedList.unshift('Hi all')
// //linkedList.unshift('Kem cho')
// console.log(linkedList.length)
// //linkedList.traverse()
// //linkedList.pop()
// //linkedList.shift()
// console.log(linkedList.length)
// //linkedList.traverse()
// //linkedList.pop()
// //linkedList.shift()
// console.log(linkedList.length)
// //linkedList.traverse()
// //linkedList.pop()
// //linkedList.shift()
// //linkedList.pop()
// //linkedList.shift()
// //linkedList.pop()
// //linkedList.shift()
// console.log(linkedList.length)
// //linkedList.traverse()

// //linkedList.pop()
// //linkedList.shift()

// //console.log(linkedList.length)
// linkedList.traverse()
// console.log(linkedList.get(8))
// linkedList.push('Arpan')
// console.log(linkedList.get(8))
// console.log(linkedList.set(8, 'Swapnil'))
// linkedList.insert(2, 'Hi')
// linkedList.traverse()
// linkedList.remove(2)
// linkedList.traverse()