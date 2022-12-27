const message = {
  say: function () {
    return this.name
  },
  changeName: function (name) {
    this.name = name
  },
}

function Person(name) {
  this.name = name
}

Person.prototype = {
  ...Person.prototype,
  ...message,
}

const person = new Person('Daiboom')

console.log(person.say())
person.changeName('YJ')
console.log(person.say())

function Gadget(title) {
  title = title
  this.getTitle = () => {
    return title
  }
}

const gardget = new Gadget('violyn')
console.log(gardget.getTitle())
