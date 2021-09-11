let arr = [2, 5, 7, 8, 9, 10, 12, 14, 15, 17, 35, 36, 40, 41, 45, 47, 50, 55, 59, 65, 69, 70, 72, 73, 75, 76, 79, 80, 85, 86, 99]
let startIndex = 0
let endIndex = arr.length - 1
let target = 2
let iteration = 0

function binarySearch(startIndex, endIndex) {
    console.log(`Search iteration : ${++iteration}`)
    if (arr.length === 0) return false
    if (startIndex > endIndex) {
        console.log(`Start Index : ${startIndex}, End Index : ${endIndex}`)
        return false
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (target === arr[middleIndex])
        return middleIndex
    else if (target < arr[middleIndex])
        return binarySearch(startIndex, middleIndex - 1)
    else if (target > arr[middleIndex])
        return binarySearch(middleIndex + 1, endIndex)
}

console.log(binarySearch(startIndex, endIndex))