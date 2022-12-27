function Stack() {
  let items = []

  this.getItems = () => {
    return items
  }

  this.print = () => {
    return items.toString()
  }

  this.push = function (param) {
    items.push(param)
  }

  this.pop = () => {
    return items.pop()
  }

  this.peek = () => {
    return items[items.length - 1]
  }

  this.isEmpty = () => {
    return this.size() === 0
  }

  this.clear = () => {
    items = []
  }

  this.size = () => {
    return items.length
  }
}

module.exports = Stack
