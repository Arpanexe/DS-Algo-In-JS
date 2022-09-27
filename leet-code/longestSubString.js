/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Example 1:

 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const lengthOfLongestSubstring = function (s) {
    let map = {}
    let start = 0
    let maxCount = 0
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]
        if (map[currentChar] !== undefined) {
            start = Math.max(map[currentChar] + 1, start)
        }
        map[currentChar] = i
        maxCount = Math.max(i - start + 1, maxCount)
    }
    return maxCount
}

//console.log(lengthOfLongestSubstring('pwwkew')) //3
//console.log(lengthOfLongestSubstring('aab')) //2
console.log(lengthOfLongestSubstring('dvdf')) //3