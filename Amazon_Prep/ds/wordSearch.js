/**
 * Given an m x n grid of characters board and a string word,
 * return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 * 
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let counter = 0
const isOutOfBound = (board, row, col) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
        return true
}

const checkNeighbors = (board, word, row, col) => {
    counter++
    // Check exit conditions
    if (!word.length) return true;
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;

    // Save some stuff
    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0 // Disable the current character

    // Check if neighbors are fruitful
    const results = checkNeighbors(board, newWord, row + 1, col) ||
        checkNeighbors(board, newWord, row - 1, col) ||
        checkNeighbors(board, newWord, row, col + 1) ||
        checkNeighbors(board, newWord, row, col - 1)

    // Enable current character
    board[row][col] = curChar

    return results;
}


const exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (checkNeighbors(board, word, row, col))
                return true
        }
    }
    return false
}

exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED')
console.log(counter)