/**
 * Given two binary strings a and b, return their sum as a binary string.
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

const addBinary = function (a, b) {
    let result = ''
    let carry = 0
    let current = 0
    //Iterate over both strings from end to start
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {

        //Check if index has valid value or not
        //If not take 0 as a value
        const binaryA = a[i] ? a[i] : 0
        const binaryB = b[j] ? b[j] : 0

        //Convert both values in integer and add carry as well
        current = parseInt(binaryA) + parseInt(binaryB) + carry

        if (current === 0) { //If sum is 0 then we can say a,b and carry all have 0 value
            //Add 0 in result string
            result = `0${result}`
            carry = 0
        } else if (current === 1) { //If sum is 1 then a,b or carry has value 1
            //Add 1 in result string
            result = `1${result}`
            carry = 0
        } else if (current === 2) { //If sum is 2 then a,b or carry has value 1
            //Add 0 in result string            
            result = `0${result}`
            //Update carry value to 1
            carry = 1
        } else if (current === 3) { //If sum is 3 then a,b and carry has value 1
            //Add 1 in result string
            result = `1${result}`
            //Update carry value to 1
            carry = 1
        }
    }
    //Check if carry has value 1, 
    if (carry === 1)
        result = `1${result}` //Add remaining carry to the result string

    return result
}

const addBinaryOptimized = (a, b) => {
    // Truth Table
    // 1st + 2nd + carry = sum, new carry, decimal sum
    //   0 +  0  + 0 = 0, 0 (0)
    //   0 +  0  + 1 = 1, 0 (1)
    //   0 +  1  + 1 = 0, 1 (2)
    //   1 +  1  + 1 = 1, 1 (3)

    let carry = 0;
    let result = '';

    let len1 = a.length - 1;
    let len2 = b.length - 1;

    for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
        let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
        if (sum > 1) {
            sum = sum % 2;
            carry = 1;
        } else {
            carry = 0;
        }
        result = `${sum}${result}`;
    }
    return result;
};

//console.log(addBinary('11', '1'))
//console.log(addBinary('1010', '1011'))
console.log(addBinary('1', '111'))
