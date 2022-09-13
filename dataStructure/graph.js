const Queue = require('./queue')
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            console.log(`${vertex1} does not exits.`)
            return undefined
        }
        if (!this.adjacencyList[vertex2]) {
            console.log(`${vertex2} does not exits.`)
            return undefined
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            console.log(`${vertex1} does not exits.`)
            return undefined
        }
        if (!this.adjacencyList[vertex2]) {
            console.log(`${vertex2} does not exits.`)
            return undefined
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            console.log(`${vertex} does not exits.`)
            return undefined
        }

        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    dfsRecursive(value) {
        const visited = {}
        const result = []
        const adjacencyList = this.adjacencyList
        function visitVertex(vertex) {
            if (!adjacencyList[vertex]) {
                console.log(`Vertex not in graph`)
                return undefined
            }
            if (adjacencyList[vertex].length === 0) {
                console.log(`Vertex has no edges`)
                return undefined
            }
            result.push(vertex)
            visited[vertex] = true
            for (const neighbor of adjacencyList[vertex]) {
                if (!visited[neighbor])
                    visitVertex(neighbor)
            }
        }
        visitVertex(value)
        console.log(`Visited vertexes: ${JSON.stringify(result)}`)
        return result
    }

    dfsIterative(value) {
        const visited = {}
        const result = []
        const stack = []
        stack.push(value)
        visited[value] = true
        let count = 0
        while (stack.length) {
            const currentVertex = stack.pop()
            result.push(currentVertex)
            count++
            //visited[currentVertex] = true //For Recursive we need to define here otherwise in loop
            for (const neighbor of this.adjacencyList[currentVertex]) {
                count++
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            }
        }
        console.log(`Visited vertexes Iterative: ${JSON.stringify(result)}`)
        console.log(`Count: ${count}`)
        return result
    }

    bfs(value) {
        const visited = {}
        const result = []
        const queue = new Queue()
        queue.enQueue(value)
        while (queue.size) {
            const currentVertex = queue.deQueue().value
            result.push(currentVertex)
            visited[currentVertex] = true
            for (const neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.enQueue(neighbor)
                }
            }
        }
        console.log(`Visited vertexes BSF: ${JSON.stringify(result)}`)
        return result
    }
}

const graph = new Graph()
// graph.addVertex('Ahmedabad')
// graph.addVertex('Mumbai')
// graph.addVertex('Delhi')
// graph.addVertex('Banglore')

// graph.addEdge('Ahmedabad', 'Mumbai')
// graph.addEdge('Delhi', 'Mumbai')
// graph.addEdge('Banglore', 'Mumbai')
// graph.addEdge('Banglore', 'Delhi')

//graph.removeEdge('Banglore', 'Mumbai')
//graph.removeVertex('Mumbai')

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

graph.dfsRecursive('A')
graph.dfsIterative('A')
//graph.bfs('A')