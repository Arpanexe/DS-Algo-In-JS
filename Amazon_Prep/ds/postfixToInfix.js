/**
Input : abc++
Output : (a + (b + c))

Input  : ab*c+
Output : ((a*b)+c)
 */

function postfixToInfix(string) {
    const length = string.length
    const stack = []
    let op1, op2
    for (let i = 0; i < length; i++) {
        const char = string[i]
        switch (char) {
            case '+':
                op1 = stack.pop();
                op2 = stack.pop();                
                stack.push(`(${op2}+${op1})`)
                break;
            case '-':
                op1 = stack.pop();
                op2 = stack.pop();                
                stack.push(`(${op2}-${op1})`)
                break;
            case '*':
                op1 = stack.pop();
                op2 = stack.pop();                
                stack.push(`(${op2}*${op1})`)
                break;
            case '/':
                op1 = stack.pop();
                op2 = stack.pop();                
                stack.push(`(${op2}/${op1})`)
                break;
            default:
                stack.push(char)
                break;
        }
    }
    return stack[stack.length - 1];
}

//console.log(postfixToInfix('ab*c+'))
console.log(postfixToInfix('abc++'))