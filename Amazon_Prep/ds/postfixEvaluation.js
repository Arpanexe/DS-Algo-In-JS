/*
Given string S representing a postfix expression, the task is to evaluate the expression 
and find the final value. Operators will only include the basic arithmetic operators 
like *, /, + and -.

Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression, 
we have -4 as result.

Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix 
expression, we have -3 as result.

https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1
*/

class Solution {
    //Function to evaluate a postfix expression.
    evaluatePostfix(S) {
        const stack = []
        let operand1, operand2, result
        for (const char of S) {
            switch (char) {
                case '+':
                    operand2 = stack.pop()
                    operand1 = stack.pop()
                    result = operand1 + operand2
                    stack.push(result)
                    break;
                case '-':
                    operand2 = stack.pop()
                    operand1 = stack.pop()
                    result = operand1 - operand2
                    stack.push(result)
                    break;
                case '/':
                    operand2 = stack.pop()
                    operand1 = stack.pop()
                    result = operand1 / operand2
                    stack.push(parseInt(result))
                    break;
                case '*':
                    operand2 = stack.pop()
                    operand1 = stack.pop()
                    result = operand1 * operand2
                    stack.push(result)
                    break;
                default:
                    stack.push(parseInt(char))
                    break;
            }
        }
        const output = parseInt(stack.pop())
        return output
    }
}