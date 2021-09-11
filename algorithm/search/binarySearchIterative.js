function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (array[middle] === target)
            return middle
        if (array[middle] > target)
            end = middle - 1
        else
            start = middle + 1
    }
    return -1
}

let arr = [2, 5, 7, 8, 9, 10, 12, 14, 15, 17, 35, 36, 40, 41, 45, 47, 50, 55, 59, 65, 69, 70, 72, 73, 75, 76, 79, 80, 85, 86, 99]
console.log(binarySearch(arr, 2))