/*
Radix sort is special sorting algorithm that works on lists of numbers
It works with numbers only if there is string then we may need to convert it to ASCII first
It never makes comparison between two elements
It exploits the fact that information about the size of number is encoded in the number of digit
More digit means bigger number

Time Complexity: Best and average case O(n log n), worst case O(n^2) 
Space Complexity: worst case O(log n)

Pseudocode/Algorithm 
Helpers: 
    getDigit(number,index): Get the digit placed at passed index
    Math.floor(Math.abs(number) / Math.pow(10, index)) % 10

    digitCount(number): Get number of digit or length of number
    Math.floor(Math.log10(Math.abs(number))) + 1

    mostDigits(numbers): Get max length of digit from the array of numbers
    Iterate over all the numbers
    Check digit count and return the max digit count

Radix sort:
Get length of max digit number from the passed array
Loop from i=0 upto largest number of digits
For each iteration of the loop:
    Create buckets/array of array for each digit(0 to 9)
    Place each number in the corresponding bucket based on its ith digit
Replace our existing array with values of in our buckets, starting with 0 to 9
Return list at the end

Use case: 
Efficient to sort data
 */

function getDigit(number, index) {
    //Math.floor because number would be in decimal
    //Math.abs to handle negative values also
    //Math.pow to power the index i.e 10,100,1000 etc...
    //Divide number from power
    //Now get mod of the number
    //ex: number 7323, index 2
    //7323/10^2 = 73.23 Math.abs will convert negative to positive
    //Math.floor will convert 73.23 to 73
    //Mod of 73%10 = 3
    return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10
}

function digitCount(number) {
    //Handle case for 0 since log10 with return -Infinity
    if (number === 0) return 1
    //Math.abs to handle negative number
    //Math.log10 is used to get 10 to what power will give us passed number
    //Math.floor to floor the number to integer
    //ex: number 423
    //Math.log10 will give us 2.6263403673750423
    //Math.floor will give us 2 and + 1 will give us length of digit
    return Math.floor(Math.log10(Math.abs(number))) + 1
}

function mostDigits(numbers) {
    let maxDigit = 0
    for (let i of numbers) {        
        maxDigit = Math.max(maxDigit, digitCount(i))
    }
    return maxDigit
}

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr)
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let j of arr) {
            let digit = getDigit(j, i)
            digitBuckets[digit].push(j)
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}

console.log(JSON.stringify(radixSort([23, 345, 5467, 12, 2345, 9852])))