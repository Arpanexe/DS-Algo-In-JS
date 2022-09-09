class Service {
    #name
    #mockRequestProcessTime
    constructor(name, mockRequestProcessTime) {
        this.#name = name
        this.#mockRequestProcessTime = mockRequestProcessTime
    }

    getName() {
        return this.#name
    }

    receiveRequest(req) {
        console.log(`${this.#name} received request and stat processing at ${new Date()}`)
        //this.#wait()
        console.log(`${this.#name} processed request at ${new Date()}`)
        return true
    }

    #wait() {
        return new Promise(resolve => {
            setTimeout(() => { resolve() }, this.#mockRequestProcessTime)
        })
    }
}

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

    enqueue(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
        console.log(`Value enqueued: ${value.getName()}, Current size: ${this.size}`)
        return node
    }

    dequeue() {
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
        console.log(`Value dequeued: ${removedNode.value.getName()}, Current size: ${this.size}`)
        return removedNode
    }
}

class RoundRobin {
    #queue
    constructor() {
        this.#queue = new Queue()
    }

    addService(service) {
        this.#queue.enqueue(service)
    }

    getNextService() {
        return this.#queue.dequeue()
    }
}

class LoadBalancer {
    #policy
    constructor() {
        this.#policy = new RoundRobin()
    }

    registerService(service) {
        this.#policy.addService(service)
    }

    sendRequest() {
        const nextServer = this.#policy.getNextService()
        nextServer.value.receiveRequest()
        this.#policy.addService(nextServer.value)
    }
}

const loadBalancer = new LoadBalancer()
const service1 = new Service(`Service 1`, 1000)
const service2 = new Service(`Service 2`, 1000)
const service3 = new Service(`Service 3`, 1000)
const service4 = new Service(`Service 4`, 1000)

loadBalancer.registerService(service1)
loadBalancer.registerService(service2)
loadBalancer.registerService(service3)
loadBalancer.registerService(service4)

loadBalancer.sendRequest()
loadBalancer.sendRequest()
loadBalancer.sendRequest()
loadBalancer.sendRequest()
loadBalancer.sendRequest()
