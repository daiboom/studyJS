// fib(n)
// if n = 1 or n = 2 then
//   return 1 # base case
// else
//   return fib(n-1) + fib(n-2) # next cas

const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.time(['fibonacci'])
console.log(fibonacci(10))
console.timeEnd(['fibonacci'])
