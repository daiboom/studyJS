const obj = {
  name: 'daiboom',
}

const props = {
  age: 28,
}

const assign = Object.assign(obj, props)
console.log(assign)
console.log(assign === obj)
