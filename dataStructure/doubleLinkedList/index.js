function DoubleLinkedList() {
  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  let length = 0
  let head = null
  let tail = null

  this.insert = (position, element) => {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      current = head
      prev = null
      index = 0

      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        } else {
        }
      } else if (position === length) {
        current = tail
      } else {
        while (index++ < position) {
          prev = current
        }
      }
    }
  }
}
