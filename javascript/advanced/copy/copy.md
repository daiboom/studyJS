# Copy

## Shallow Copy
```js
const target = {
  birth: {
    year: 1992,
    month: 1,
    day: 25
  }
}

const cloneTarget01 = target
const cloneTarget02 = Object.assign(null, target)

console.log(target === cloneTarget)
```

```terminal
true
```
## Deep Copy
```js
function clone(value){
  return JSON.parse(JSON.stringify(value))
}

const target = {
  birth: {
    year: 1992,
    month: 1,
    day: 25
  }
}

const cloneTarget = clone(target)
console.log(target === cloneTarget)
```
```terminal
false
```