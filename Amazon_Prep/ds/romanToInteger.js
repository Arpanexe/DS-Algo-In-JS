/*
Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

Input:
s = V
Output: 5

Input:
s = III 
Output: 3

Expected Time Complexity: O(|S|), |S| = length of string S.
Expected Auxiliary Space: O(1)

Constraints:
1<=roman no range<=3999
*/


class Solution {
    romanToDecimal(str) {
        let total = 0
        for (let i = 0; i < str.length; i++) {
            const currentChar = str[i]
            const currentValue = this.getIntValue(currentChar)
            if ((i + 1) < str.length) {
                const nextChar = str[i + 1]
                const nextValue = this.getIntValue(nextChar)
                if (currentValue < nextValue) {
                    total += nextValue - currentValue
                    i = i + 1
                } else {
                    total += currentValue
                }
            } else {
                total += currentValue
            }
        }
        return total
    }

    getIntValue(char) {
        let value = 0
        switch (char) {
            case 'I':
                value = 1
                break
            case 'V':
                value = 5
                break
            case 'X':
                value = 10
                break
            case 'L':
                value = 50
                break
            case 'C':
                value = 100
                break
            case 'D':
                value = 500
                break
            case 'M':
                value = 1000
                break
            default:
                break;
        }
        return value
    }
}

const solution = new Solution()
//console.log(solution.romanToDecimal('CMXVI'))
console.log(solution.romanToDecimal('MMMDCCXCIV'))