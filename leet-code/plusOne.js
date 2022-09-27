/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 * 
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne1 = function (digits) {
    let numberStr = digits.join('')
    let number = parseInt(numberStr)
    number++
    const array = number.toString().split('')
    return array.map(element => {
        return parseInt(element)
    })    
};

const plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
      if(++digits[i] > 9) digits[i] = 0;
      else return digits;
    }
    digits.unshift(1);
    return digits;
  };

console.log(plusOne([1, 2, 9]))