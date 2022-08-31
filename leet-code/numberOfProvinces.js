/**
https://leetcode.com/problems/number-of-provinces/
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNumDFS = function (isConnected) {
    const seen = new Set();
    let res = 0;
    const dfs = (i) => {
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j] === 1 && !seen.has(j)) {
                seen.add(j);
                console.log(`${i} is connected with ${j}`)
                console.log(`seen: ${Array.from(seen)}`)
                dfs(j);
            } else if (seen.has(j)) {
                console.log(`${j} is already seen`)
            } else {
                console.log(`${i} is not connected with ${j}`)
                console.log(`seen: ${Array.from(seen)}`)
            }
        }
        console.log(`${i} traversal completed`)
    }
    for (let i = 0; i < isConnected.length; i++) {
        if (!seen.has(i)) {
            dfs(i);
            res++;
        }
    }

    return res;
};

const findCircleNumBSF = function (M) {
    const seen = new Set();
    let res = 0;
    let stack = [];
    for (let i = 0; i < M.length; i++) {
        if (!seen.has(i)) {
            stack.push(i);
            while (stack.length) {
                const curr = stack.pop();
                seen.add(curr);
                for (let j = 0; j < M[0].length; j++) {
                    if (M[curr][j] === 1 && !seen.has(j)) {
                        stack.push(j);
                    }
                }
            }
            res++;
        }
    }
    return res;
};

//findCircleNumDFS([[1, 1, 0], [1, 1, 0], [0, 0, 1]])

findCircleNumDFS([[1, 1, 0, 0], [1, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 1]])