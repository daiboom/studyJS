function MinCoinChange(coins) {
  var coins = coins
  let cache = {}

  console.log('coins: ', coins)

  this.makeChange = function (amount) {
    let me = this

    if (!amount) {
      return []
    }

    if (cache[amount]) {
      return cache[amount]
    }

    let min = []
    let newMin = null
    let newAmount = null

    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i]

      newAmount = amount - coin

      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount)
      }

      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('new Min' + min + ' for ' + amount)
      }
    }

    return (cache[amount] = min)
  }
}

const minCoinChange = new MinCoinChange([10, 50, 100, 500, 1000])
console.log('minCoinChange: ', minCoinChange.makeChange(12500))
