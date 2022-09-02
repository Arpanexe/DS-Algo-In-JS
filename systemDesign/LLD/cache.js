class Node {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    #head
    #tail
    #size
    #dllCache
    constructor() {
        this.#head = null
        this.#tail = null
        this.#size = 0
        this.#dllCache = {}
    }

    getSize() {
        return this.#size
    }

    getDLLCache() {
        return this.#dllCache
    }

    addAtFirst(key) {
        let node = new Node(key)

        if (this.#size === 0) {
            this.#head = this.#tail = node
        } else {
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }
        this.#size++
        this.#dllCache[key] = node
        return node
    }

    get(key) {
        let node = this.#dllCache[key]
        return node
    }

    nodeAccessed(node) {
        if (node === this.#head)
            return node
        let previous = null, next = null

        previous = node.prev
        next = node.next

        if (node === this.#tail) {
            previous.next = null
            this.#tail = previous
        } else {
            previous.next = next
            next.prev = previous
        }

        this.#head.prev = node
        node.next = this.#head
        node.prev = null
        this.#head = node

        return node
    }

    remove(node) {
        let previous = null, next = null

        previous = node.prev
        next = node.next

        if (node === this.#head) {
            next.prev = null
            this.#head = next
        }
        if (node === this.#tail) {
            previous.next = null
            this.#tail = previous
        } else {
            previous.next = next
            next.prev = previous
        }

        this.#size--
    }

    removeLast() {
        const nodeToRemove = this.#tail
        const previous = nodeToRemove.prev
        delete this.#dllCache[nodeToRemove.key]
        previous.next = null
        nodeToRemove.prev = null
        this.#tail = previous
        this.#size--
        return nodeToRemove
    }
}

class LRUEvictionPolicy {
    #dll
    constructor() {
        this.#dll = new DoublyLinkedList()
    }

    keyAccessed(key) {
        const dllCache = this.#dll.getDLLCache()
        const node = dllCache[key]
        if (!node) {
            this.#dll.addAtFirst(key)
        } else {
            this.#dll.nodeAccessed(node)
        }
    }

    evictKey() {
        return this.#dll.removeLast()
    }

    remove(key) {
        const node = dllCache[key]
        this.#dll.remove(node)
    }
}

class MapStorage {
    #size
    #map
    constructor(size) {
        this.#size = size
        this.#map = new Map()
    }

    isStorageFull() {
        return this.#size === this.#map.size
    }

    add(key, value) {
        this.#map.set(key, value)
    }

    update(key, value) {
        this.#map.set(key, value)
    }

    get(key) {
        if (!this.#map.has(key)) throw Error(`Key not found`)
        return this.#map.get(key)
    }

    remove(key) {
        if (!this.#map.has(key)) throw Error(`Key not found`)
        return this.#map.delete(key)
    }
}

class LRUCache {
    #evictionPolicy
    #storage
    constructor() {
        this.#evictionPolicy = new LRUEvictionPolicy()
        this.#storage = new MapStorage(5)
    }

    put(key, value) {
        if (this.#storage.isStorageFull()) {
            const removedNode = this.#evictionPolicy.evictKey()
            this.#storage.remove(removedNode.key)
        }
        this.#storage.add(key, value)
        this.#evictionPolicy.keyAccessed(key)
        return key
    }

    remove(key) {
        this.#storage.remove(key)
        this.#evictionPolicy.remove(key)
    }

    get(key) {
        const item = this.#storage.get(key)
        this.#evictionPolicy.keyAccessed(key)
        return item
    }
}

const cache = new LRUCache()
cache.put(1, 'A')
cache.put(2, 'B')
cache.put(3, 'C')
cache.put(4, 'D')
cache.put(1, 'E')
cache.put(5, 'F')
cache.put(6, 'G')

