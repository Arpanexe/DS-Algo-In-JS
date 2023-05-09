//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix)
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let left = 0
        let right = matrix.length - 1
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]
            left++
            right--
        }
    }
}
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])