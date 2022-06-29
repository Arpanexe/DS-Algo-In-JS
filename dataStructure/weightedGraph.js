class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) {
            console.log(`${vertex1} does not exits.`)
            return undefined
        }
        if (!this.adjacencyList[vertex2]) {
            console.log(`${vertex2} does not exits.`)
            return undefined
        }

        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }
}