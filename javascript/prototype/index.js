function Person(name) {
  this._name = name
}
const person1 = new Person('1')

console.log(person1)

Person.prototype.getName = function () {
  return this._name
}

console.log(person1.getName())

function Peaple(gender) {
  this._gender = gender
}

const person = new Person('Daiboom')
const peaple = new Peaple('Nice')
const Man = Object.assign(Person, Peaple)

const man = new Man('Hello')

Man.prototype.type = (type) => {
  this.photo = type
}

Man.prototype.getType = () => {
  return this.photo
}

console.log('person: ', person)
console.log('man: ', man)
console.log(person.getName())
man.type('man')
console.log(man.getType())
console.log(man)
person.type('person')
console.log(person.getType())
peaple.type('peaple')
console.log(peaple.getType())

console.log('-----------------------')
console.log(person.constructor)
console.log(peaple.constructor)
console.log(man.constructor)
