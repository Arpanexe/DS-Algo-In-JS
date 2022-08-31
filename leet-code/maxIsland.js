let maxAreaOfIsland = function (grid) {
    let maxScore = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            maxScore = Math.max(maxScore, DFS(grid, r, c))
        }
    }
    return maxScore
};

function DFS(grid, row, col) {

    if (row >= grid.length || col >= grid[0].length || col < 0 || row < 0 || grid[row][col] != 1) return 0

    grid[row][col] = 2;

    let up = DFS(grid, row + 1, col)
    let down = DFS(grid, row - 1, col)
    let right = DFS(grid, row, col + 1)
    let left = DFS(grid, row, col - 1)

    return 1 + up + down + left + right

}

maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])