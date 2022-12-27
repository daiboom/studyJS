const publisher = {
  subscribers: {
    any: [],
  },
  subscribe: function (fn, type) {
    type = type || 'any'
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = []
    }

    this.subscribers[type].push(fn)
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type)
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type)
  },
  visitSubscribers: function (action, arg, type) {
    const pubtype = type || 'any'
    const subscribers = this.subscribers[pubtype]
    const max = subscribers?.length || 0
    console.log({ max })
    for (let i = 0; i < max; i++) {
      if (action === 'publish') {
        subscribers[i](arg)
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1)
        }
      }
    }
  },
}

function makePublisher(o) {
  for (let i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = publisher[i]
    }
  }

  o.subscribers = { any: [] }
}

let paper = {
  daily: function () {
    this.publish('big new today')
  },
  monthly: function () {
    this.publish('interesting analysis', 'monthly')
  },
}

let joe = {
  drinkCoffee: function (paper) {
    console.log(paper + '를 읽었습니다.')
  },
  sundayPreNap: function (monthly) {
    console.log('잠들기 전에 ' + monthly + ' 를 읽고 있습니다.')
  },
}

makePublisher(paper)

paper.subscribe(joe.drinkCoffee)
paper.subscribe(joe.sundayPreNap)
paper.daily()
paper.monthly()

makePublisher(joe)

joe.tweet = function (msg) {
  this.publish(msg)
}

paper.readTweets = function (tweet) {
  console.log('Call big meeting! Someone ' + tweet)
}

joe.subscribe(paper.readTweets)
joe.tweet('hated the paper today')
