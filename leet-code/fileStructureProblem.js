/*
Given a list of [FileName, FileSize, [Collection]] - Collection is optional, i.e., a collection can have 1 or more files. 
Same file can be a part of more than 1 collection. How would you design a system

To calculate total size of files processed.
To calculate Top K collections based on size.
Example:
file1.txt(size: 100)
file2.txt(size: 200) in collection "collection1"
file3.txt(size: 200) in collection "collection1"
file4.txt(size: 300) in collection "collection2"
file5.txt(size: 100)
Output:

Total size of files processed: 900
Top 2 collections:
- collection1 : 400
- collection2 : 300
*/

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    #queue
    constructor() {
        this.#queue = []
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.#queue.push(node)
        this.#findRightSpot()
    }

    dequeue() {
        const first = this.#queue[0]
        const last = this.#queue.pop()
        if (this.#queue.length > 0) {
            this.#queue[0] = last
            this.#reArrange()
        }
        return first
    }

    #findRightSpot() {
        let index = this.#queue.length - 1
        const element = this.#queue[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            const parent = this.#queue[parentIndex]
            if (element.priority <= parent.priority) break
            this.#queue[parentIndex] = element
            this.#queue[index] = parent
            index = parentIndex
        }
    }

    #reArrange() {
        let index = 0
        const element = this.#queue[index]
        const length = this.#queue.length
        while (index < length) {
            let leftChildIndex = (index * 2) + 1
            let rightChildIndex = (index * 2) + 2
            let swap = undefined
            let leftChild = undefined
            if (rightChildIndex < length) {
                leftChild = this.#queue[leftChildIndex]
                if (leftChild.priority > element.priority) swap = leftChildIndex
            }
            if (rightChildIndex < length) {
                let rightChild = this.#queue[rightChildIndex]
                if ((swap !== undefined && rightChild.priority > leftChild.priority)
                    || (swap === undefined && rightChild.priority > element.priority))
                    swap = rightChildIndex
            }
            if (swap === undefined) break
            this.#queue[index] = this.#queue[swap]
            this.#queue[swap] = element
            index = swap
        }
    }
}

class FileTest {
    constructor(fileName, size) {
        this.fileName = fileName
        this.size = size
    }
}

class Directory {
    constructor(directory) {
        this.directory = directory
        this.files = []
        this.size = 0
    }

    addFile(file) {
        this.files.push(file)
        this.size += file.size
    }

}

class FileSystemTest {
    constructor() {
        this.directoryCollection = new Map()
        this.files = []
        this.size = 0
    }

    addFileToDirectory(fileName, size, directoryName) {
        const file = new FileTest(fileName, size)
        this.files.push(file)
        this.size += file.size
        if (directoryName) {
            let directory
            if (this.directoryCollection.has(directoryName)) {
                directory = this.directoryCollection.get(directoryName)
            } else {
                directory = new Directory(directoryName)
            }
            directory.addFile(file)
            this.directoryCollection.set(directoryName, directory)
        }
    }

    getTopNCollection(n) {
        const priorityQueue = new PriorityQueue()
        const topDirectory = []
        for (const [name, value] of this.directoryCollection.entries()) {
            priorityQueue.enqueue(name, value.size)
        }
        for (let i = 0; i < n; i++) {
            const topElement = priorityQueue.dequeue()
            topDirectory.push({ name: topElement.value, size: topElement.priority })
        }
        return topDirectory
    }
}

const fileSystem = new FileSystemTest()
fileSystem.addFileToDirectory('file1', 100)
fileSystem.addFileToDirectory('file2', 200, 'collection1')
fileSystem.addFileToDirectory('file3', 200, 'collection1')
fileSystem.addFileToDirectory('file4', 300, 'collection2')
fileSystem.addFileToDirectory('file5', 100)

console.log(`Total file size: ${fileSystem.size}`)
const topDirectory = fileSystem.getTopNCollection(2)
console.log(`Top Directory: ${JSON.stringify(topDirectory)}`)

