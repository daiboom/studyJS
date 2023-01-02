// memo ← {}
// fib(n, memo)
// if n = 1 or n = 2 then
// return 1
// if n in memo then
// return memo[n]
// else
// memo[n] ← fib(n-1, memo) + fib(n-2, memo)
// return memo[n]

// const factorial = require("./factorial");

let memo = {}
const factorial = (n, memo) => {
  if (n === 1 || n === 2) {
    return 1
  } else {
    if (memo[n]) {
      return memo[n]
    } else {
      memo[n] = factorial(n - 1, memo) + factorial(n - 2, memo)
      return memo[n]
    }
  }
}
console.time(['MEMOIZATION'])
console.log(factorial(10, memo))
console.timeEnd(['MEMOIZATION'])
