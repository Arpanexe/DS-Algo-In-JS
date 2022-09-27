/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

https://leetcode.com/problems/max-area-of-island/
*/
const maxAreaOfIsland = function (grid) {
    let maxArea = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            maxArea = Math.max(maxArea, findMaxArea(grid, i, j))
            console.log(`Max Area: ${maxArea}`)
        }
    }
    return maxArea
}

function findMaxArea(grid, row, col) {
    console.log(`${row},${col}: ${(row >= grid.length || row < 0 || col >= grid[0].length || col < 0) ? undefined : grid[row][col]}`)
    if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] !== 1) return 0

    grid[row][col] = 2

    const up = findMaxArea(grid, row + 1, col)
    const down = findMaxArea(grid, row - 1, col)
    const left = findMaxArea(grid, row, col + 1)
    const right = findMaxArea(grid, row, col - 1)

    const result = 1 + up + down + left + right
    console.log(`result: ${result}`)
    return result
}

maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])