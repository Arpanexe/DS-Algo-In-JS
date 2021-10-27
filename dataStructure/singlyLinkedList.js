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
    
    traverse(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const linkedList = new SinglyLinkedList()
linkedList.push('Hello')
linkedList.push('my')
linkedList.push('name')
linkedList.push('is')
linkedList.push('Arpan')
linkedList.traverse()