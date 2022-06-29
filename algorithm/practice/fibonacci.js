
function fibonacciRecursive(n) {
    if (n <= 2) return 1
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

//console.log(fibonacciRecursive(1000)) //Never do that, It will take a lot I MEAN A LOT TIME.
//console.log(fibonacciRecursive(5))

function fibonacciMemoized(n, mem = []) {
    if (mem[n]) return mem[n]
    if (n <= 2) return 1
    let result = fibonacciMemoized(n - 1, mem) + fibonacciMemoized(n - 2, mem)
    mem[n] = result
    return result
}
console.log(fibonacciMemoized(10))

function fibonacciTabulation(n) {
    if (n <= 2) return 1
    const fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}
console.log(fibonacciTabulation(10))