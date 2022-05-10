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
}

const graph = new Graph()
graph.addVertex('Ahmedabad')
graph.addVertex('Mumbai')
graph.addVertex('Delhi')
graph.addVertex('Banglore')

graph.addEdge('Ahmedabad', 'Mumbai')
graph.addEdge('Delhi', 'Mumbai')
graph.addEdge('Banglore', 'Mumbai')
graph.addEdge('Banglore', 'Delhi')

//graph.removeEdge('Banglore', 'Mumbai')
graph.removeVertex('Mumbai')