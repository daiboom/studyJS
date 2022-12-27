function GreedyCoinChange(coins) {
  var coins = coins

  this.makeChange = (amount) => {
    let change = []
    let total = 0

    for (let i = coins.length; i >= 0; i--) {
      let coin = coins[i]
      while (total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}

const greedyCoinChange = new GreedyCoinChange([10, 50, 500, 1000])
console.log(greedyCoinChange.makeChange(12500))
