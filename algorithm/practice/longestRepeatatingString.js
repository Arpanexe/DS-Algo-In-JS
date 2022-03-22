function longestString(string) {
    let map = {}
    const stringMap = {}
    let subStr = ''
    for (let char of string) {
        if (map[char]) {
            stringMap[subStr] = {
                length: subStr.length,
                count: ++stringMap[subStr].count || 1
            }
            subStr = ''
            map = {}
        }
        map[char] = char
        subStr += char
    }
    let maxLength = 0
    let str = ''
    for (let key in stringMap) {
        if (stringMap[key] > maxLength) {
            maxLength = stringMap[key]
            str = key
        }
    }
    return str
}

console.log(longestString('123123123'))
console.log(longestString('1234123123'))