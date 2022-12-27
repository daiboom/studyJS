function Player(name) {
  this.points = 0
  this.name = name
}

Player.prototype.play = function () {
  this.points += 1
  mediator.played()
}

let scoreboard = {
  element: document.querySelector('#results'),
  update: function (score) {
    console.log('scoreboard update score: ', score)
    let i = null
    let msg = ''

    for (i in score) {
      if (score.hasOwnProperty(i)) {
        msg += '<p><string>' + i + '</string>:'
        msg += score[i]
        msg += '</p>'
      }
    }

    this.element.innerHTML = msg
  },
}
console.log(scoreboard)
let mediator = {
  players: {},

  setup: function () {
    let players = this.players
    players.home = new Player('Home')
    players.guest = new Player('Guest')
  },
  played: function () {
    let players = this.players
    console.log(players)
    let score = {
      Home: players.home.points,
      Guest: players.guest.points,
    }

    scoreboard.update(score)
  },

  keypress: function (e) {
    e = e || window.event
    console.log(e)
    if (e.which === 49) {
      mediator.players.home.play()
      return
    }
    if (e.which === 48) {
      mediator.players.guest.play()
      return
    }
  },
}

mediator.setup()
window.onkeypress = mediator.keypress

setTimeout(function () {
  window.keypress = null
  alert('Game Over!')
}, 30000)
