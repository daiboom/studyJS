const memoization = (parameter) => {
  if (!memoization.cache[parameter]) {
    let result = {}
    memoization.cache[parameter] = result
  }

  return memoization.cache[parameter]
}

memoization.cache = {}

const memoizationExample1 = function (parameter) {
  const cachekey = JSON.stringify(Array.prototype.slice.call(arguments))
  let result = null

  console.log({ cachekey })

  if (!memoizationExample1.cache[cachekey]) {
    let result = {}
    memoizationExample1.cache[cachekey] = result
  }

  return memoizationExample1.cache[cachekey]
}

memoizationExample1.cache = {}

memoizationExample1()
