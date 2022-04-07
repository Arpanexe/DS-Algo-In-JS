const Node = require('./node')

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
        this.length++
        console.log(`Push: ${value}`)
        return this
    }

    pop() {
        if (this.length === 0) return
        const currentTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.previous
            this.tail.next = null
            //We need to make removed tail previous NULL as well 
            //Because it will contain reference to the previous node            
            currentTail.previous = null
        }
        this.length--
        console.log(`Pop: ${JSON.stringify(currentTail)}`)
        return currentTail
    }

    unShift(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            const currentHead = this.head
            node.next = currentHead
            currentHead.previous = node
            this.head = node
        }
        this.length++
        console.log(`unShift: ${value}`)
        return this
    }

    shift() {
        if (this.length === 0) return
        const currentHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = currentHead.next
            this.head.previous = null
            //We need to make removed node next NULL as well
            //Because it will contain reference to the next node
            currentHead.next = null
        }
        this.length--
        console.log(`Shift: ${JSON.stringify(currentHead)}`)
        return currentHead
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let node = undefined
        if (index <= this.length / 2) {
            console.log(`From start`)
            let cntIndex = 0
            node = this.head
            while (cntIndex != index) {
                node = node.next
                cntIndex++
            }
        } else {
            console.log(`From end`)
            let cntIndex = this.length - 1
            node = this.tail
            while (cntIndex != index) {
                node = node.previous
                cntIndex--
            }
        }
        console.log(`Returned node: ${node.value}`)
        return node
    }

    set(index, value) {
        const node = this.get(index)
        if (!node) {
            console.error(`Invalid index`)
            return undefined
        }
        node.value = value
        console.log(`Node set: ${node.value}`)
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error(`Invalid index`)
            return undefined
        }
        if (index === 0) return this.unShift(value)
        if (index === this.length) return this.push(value)
        //We are getting previous node of indexed node
        const previousNode = this.get(index - 1)
        const nextNode = previousNode.next
        const newNode = new Node(value)
        previousNode.next = newNode
        newNode.previous = previousNode
        nextNode.previous = newNode
        newNode.next = nextNode
        this.length++
        console.log(`Node inserted`)
        return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error(`Invalid index`)
            return undefined
        }
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const node = this.get(index)
        const previousNode = node.previous
        const nextNode = node.next
        previousNode.next = nextNode
        nextNode.previous = previousNode
        node.next = null
        node.previous = null
        this.length--
        console.log(`Node removed: ${node.value}`)
        return node
    }

    reverse() {
        if (this.length === 0) return
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next
        let previous = null
        for (let index = 0; index < this.length; index++) {
            next = temp.next
            temp.next = previous
            temp.previous = next
            previous = temp
            temp = next
        }
        this.traverse()
        return this
    }

    traverse() {
        const dllArray = []
        if (this.length === 0) return dllArray
        let currentNode = this.head
        while (currentNode) {
            dllArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(dllArray)
    }
}

const dll = new DoublyLinkedList()
// dll.pop()
// dll.push(10)
// dll.push(20)
// dll.push(30)
// dll.push(40)
// dll.get(2)
// dll.traverse()
// dll.pop()
// dll.traverse()
// dll.unShift(5)
// dll.traverse()
// dll.shift()
// dll.traverse()
// dll.shift()
// dll.shift()
// dll.shift()
dll.push(10)
dll.push(20)
dll.push(30)
dll.push(40)
dll.push(50)
//dll.get(8)
// dll.insert(0, 5)
// dll.insert(5, 100)
// dll.insert(3, 25)
//dll.set(10, 50)
//dll.remove(0)
// dll.remove(1)
// dll.remove(1)
// dll.remove(1)
// dll.remove(0)
// dll.traverse()
dll.reverse()