const { Queue, PriorityQueue } = require('../queue')

let queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('Hello')
queue.enqueue('World')
queue.print()

queue.dequeue()
queue.dequeue()
queue.print()

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue('Hi', 2)
priorityQueue.enqueue('Nice', 1)
priorityQueue.enqueue('Daiboom', 1)
priorityQueue.print()

function hotPotato(nameList, num) {
  let queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminated = queue.dequeue()
    console.log(`${eliminated}를 뜨거운 감자 게임에서 퇴장시킵니다.`)
  }

  return queue.dequeue()
}

const names = ['a', 'b', 'c', 'd', 'e']

const winner = hotPotato(names, 7)
console.log(`승자는 ${winner}입니다`)
