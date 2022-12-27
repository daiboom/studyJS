const sayHi = function (target) {
  console.log(this.constructor)
  return `Hello ${target ?? ''}!`
}

const alien = {}

console.log(sayHi())
console.log(sayHi('World'))
console.log('apply: ', sayHi.apply(null, ['Daiboom']))
console.log('apply: ', sayHi.apply(alien, ['Dialog']))
console.log('call: ', sayHi.call(alien, 'Dialog'))
