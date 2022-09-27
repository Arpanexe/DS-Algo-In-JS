/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 */

//Failing some test cases on leetCode
const longestPalindromeBruteForce = function (s) {
    let maxSubstring = ''
    let subString = ''
    if (s.length === 2) {
        if (s[0] === s[1]) return s
        else return s[0]
    }
    for (let i = 0; i < s.length; i++) {
        //const currentChar = s[i]
        subString = s[i]
        for (let j = i + 1; j < s.length; j++) {
            subString += s[j]
            if (isPalindrome(subString)) {
                maxSubstring = subString.length > maxSubstring.length ? subString : maxSubstring
            }
        }
        //subString = ''
    }
    return maxSubstring === '' ? s[0] : maxSubstring
}

function isPalindrome(word) {
    let start = 0, end = word.length - 1
    while (start < end) {
        if (word[start] !== word[end])
            return false
        start++
        end--
    }
    return true
}

/****************************************************************************** */
const longestPalindrome = function (s) {

    if (s.length <= 1) return s;

    // construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

    let lps = '';

    // base case for one character
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // base case for two characters
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = true;
        if (dp[i][i + 1]) lps = s.substring(i, i + 2);
    }

    // expand to three or more characters
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }

    return lps;
}

console.log(longestPalindrome('babad'))
//console.log(longestPalindrome('cbbd'))
//console.log(longestPalindrome("plyvmcthyommabcqtmqklpfkopccabybkneifgjdqhexoezlykccgpfidcqizmotounzpslphlpwghbubwthhpivqvwmvuirfhfnkjzpxyccwnuqodbdmsxybztgzvtonheaxcrpukdpgapfczulexugxghuzuvwqvgckpsgjqyzywlxtzmkqmzgavdmchnyaqzidzjfbizxgikjbsmhyikjvgveeifntxpmpgaoqbzwxyfsnexidvxdxxzzzykphrzprlzoyqqlbxbbgmyzplgqnzphbbdxitexvvjzhtpgkfpfazqiqeyczhkkooykaotkqwuuehbgfyznwjqutbltsamcmzyhzrdvvdrzhyzmcmastlbtuqjwnzyfgbheuuwqktoakyookkhzcyeqiqzafpfkgpthzjvvxetixdbbhpznqglpzymgbbxblqqyozlrpzrhpkyzzzxxdxvdixensfyxwzbqoagpmpxtnfieevgvjkiyhmsbjkigxzibfjzdizqaynhcmdvagzmqkmztxlwyzyqjgspkcgvqwvuzuhgxguxeluzcfpagpdkuprcxaehnotvzgtzbyxsmdbdoqunwccyxpzjknfhfriuvmwvqviphhtwbubhgwplhplspznuotomziqcdifpgcckylzeoxehqdjgfienkbybaccpokfplkqmtqcbammoyhtcmvylp"))

