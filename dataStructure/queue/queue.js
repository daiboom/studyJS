function Queue() {
  let items = []
  this.enqueue = (el) => {
    items.push(el)
  }

  this.dequeue = () => {
    return items.shift()
  }

  this.front = () => {
    return this.front[0]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.size = () => {
    return items.length
  }

  this.print = () => {
    console.log(items.toString())
  }
}

function PriorityQueue() {
  let items = []

  function QueueElement(el, priority) {
    this.el = el
    this.priority = priority
  }

  this.enqueue = (el, priority) => {
    let queueElement = new QueueElement(el, priority)

    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        items.push(queueElement)
      }
    }
    console.log(JSON.stringify(queueElement))
  }

  this.dequeue = () => {
    return items.shift()
  }

  this.front = () => {
    return this.front[0]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.size = () => {
    return items.length
  }

  this.print = () => {
    console.log(items.toString())
  }
}

module.exports = {
  Queue,
  PriorityQueue,
}
