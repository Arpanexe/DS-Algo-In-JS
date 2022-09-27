//https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Example 2:
 * 
 * Input: s = "God Ding"
 * Output: "doG gniD"
 */

// const reverseWords = function (s) {
//     let reverseString = ''
//     let word = ''
//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s[i]
//         if (currentChar === ' ') {
//             reverseString += `${reverse(word)} `
//             word = ''
//         } else {
//             word += currentChar
//         }
//     }
//     if (word !== '') {
//         reverseString += `${reverse(word)}`
//     }
//     return reverseString
// }

function reverse(word) {
    let start = 0
    let end = word.length - 1
    while (start < end) {
        const temp = word[start]
        word[start] = word[end]
        word[end] = temp
        start++
        end--
    }
    return word
}

const reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};

console.log(reverseWords("Let's take LeetCode contest"))