/**
 * https://leetcode.com/problems/length-of-last-word/
 * 
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * 
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 */

const lengthOfLastWord = function (s) {
    let startIndex = s.length - 1
    let length = 0
    for (let i = startIndex; i >= 0; i--) {
        if (s[i] === ' ') startIndex--
        else break
    }
    for (let i = startIndex; i >= 0; i--) {
        if (s[i] !== ' ') length++
        else break
    }
    return length
}

const lengthOfLastWordOptimized = function (s) {
    let startIndex = s.length - 1
    let length = 0
    let hasStarted = false
    for (let i = startIndex; i >= 0; i--) {
        if (s[i] !== ' ') hasStarted = true
        if (hasStarted) {
            if (s[i] === ' ') break;
            length++;
        }
    }
    return length
}

//console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))