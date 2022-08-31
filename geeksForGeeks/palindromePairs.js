class Solution {
    palindromepair(N, arr) {
        let count = 0
        for (let i = 0; i < N - 1; i++) {
            for (let j = i + 1; j < N; j++) {
                if (this.checkPalindrome(arr[i].concat(arr[j]))) {
                    console.log(`${arr[i]} and ${arr[j]} Palindrome`)
                    count++
                } else {
                    console.log(`${arr[i]} and ${arr[j]} not Palindrome`)
                }
            }
        }
        console.log(`Count : ${count}`)
    }

    checkPalindrome(string) {
        let start = 0
        let end = string.length - 1
        while (start < end) {
            if (string[start] !== string[end]) return false
            start++
            end--
        }
        return true
    }
}

const sol = new Solution()
//sol.palindromepair(6, ["geekf", "geeks", "or", "keeg", "abc", "bc"])
sol.palindromepair(5, ["abc", "xyxcba", "geekst", "or", "bc"])
//sol.checkPalindrome('AABAAA')