/*Given two strings, write function to determine if the 
  second string is an anagram of the first.
  An anagram is a word, phrase or name formed by rearranging
  the letters of another, such as cinema, formed iceman.
*/

//O(n) implementation for valid anagram using frequency counter pattern
// function validAnagrams(str1, str2) {
//     const mapObj1 = {}
//     const mapObj2 = {}
//     for (const char of str1) {
//         mapObj1[char] = (mapObj1[char] || 0) + 1
//     }
//     for (const char of str2) {
//         mapObj2[char] = (mapObj2[char] || 0) + 1
//     }

//     for (const prop in mapObj1) {
//         if (!mapObj2[prop] || mapObj2[prop] !== mapObj1[prop])
//             return false
//     }
//     return true
// }

//With 2 loops only
function validAnagrams(str1, str2) {
    const mapObj = {}
    for (const char of str1) {
        mapObj[char] = (mapObj[char] || 0) + 1
    }
    for (const char of str2) {
        if (!mapObj[char]) return false
        else {
            mapObj[char] -= 1
        }
    }
    return true
}

//Test cases
console.log(validAnagrams('', '')) // true
console.log(validAnagrams('aaz', 'zza')) // false
console.log(validAnagrams('anagram', 'nagaram')) // true
console.log(validAnagrams('rat', 'car')) // false
console.log(validAnagrams('awesome', 'awesom')) // false
console.log(validAnagrams('qwerty', 'qeywrt')) // true
console.log(validAnagrams('textwithtime', 'timewithtext')) // true
