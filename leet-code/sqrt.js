/**
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 * 
 * Input: x = 4
 * Output: 2
 * 
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let low = 0, high = x
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (mid * mid === x) return mid
        if (x < mid * mid) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return x < high * high ? high - 1 : high
}