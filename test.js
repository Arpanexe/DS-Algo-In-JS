/*
Write a program that, given a number n, prints out all numbers from 1 to n (inclusive),
each on their own line. But there's a catch:
• For numbers divisible by 3, instead of n, print Fizz
• For numbers divisible by 5, instead of n, print Buzz
• For numbers divisible by 3 and 5, just print FizzBuzz
*/

function printNumbers(n){
  let cnt = 1
  while(cnt<=n){    
    if(n%3===0 && n%5===0)
      console.log(`FizzBuzz`)
    else if(n%3===0)
      console.log(`Fizz`)
    else if(n%5===0)
      	console.log(`Buzz`)
    else 
    	console.log(n)
    cnt++
}
}





/*
n factorial (written as n!) is the number we get when we multiply every positive number from 1 up to n together.
In this problem, your code will do the grunt work of computing the factorial.
Problem Statement
Write a program that, given a number n, prints out the factorial of n:
• If n is 0, n factorial is 1
• n! is not defined for negative numbers.
*/

function factorials(number){
  if(number=>0){
    let fact = 1 
  for(let i=1;i<=number;i++){
    fact *=i
  }
  console.log(fact)
  }else {
    console.log(`This operation is not available for negative numbers`)
  }
  
}

function factorialRecursive(number){
  if(number===0)
    return 1
  return number * factorialRecursive(--number)
}


/*
For this question, you will parse a string to determine if it contains only "balanced delimiters."
A balanced delimiter starts with an opening character ((, [, {), ends with a matching closing character (), ], } respectively),
and has only other matching delimiters in between. A balanced delimiter may contain any number of balanced delimiters.


Examples
The following are examples of balanced delimiter strings:
()[]{}
([{}])
([]{})


The following are examples of invalid strings:
([)]
([]
[])
([})
Input is provided as a single string. Your output should be True or False according to whether the string is balanced.
*/

string = "][]"


function checkDelimiter(string){
  const delimiterStack = []
  for(let char of string){
    
      if(char ===`)`){
      if(delimiterStack.pop()!==`(`)
        	return false
    }
    else if(char ===`}`){
      if(delimiterStack.pop()!==`{`)
        	return false
    }
    else if(char ===`]`){
      if(delimiterStack.length === 0 || delimiterStack.pop()!==`[`)
        	return false
    }else {
      delimiterStack.push(char)    
    }          	
  }
  return true
}