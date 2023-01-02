// factorial(n)
// if n = 1 then
//   return 1 # base case
// else
//   return n * factorial(n-1) # next case

const factorial = (n) => {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(2))

module.exports = factorial
