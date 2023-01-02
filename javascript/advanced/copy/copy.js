const deepCopy = (target) => {
  return JSON.parse(JSON.stringify(target))
}

console.log(Object.assign({ gender: 'male' }, { name: 'nice' }))
console.log(Object.call({ gender: 'male' }, { name: 'nice' }))
console.log(Object.bind({ gender: 'male' }, { name: 'nice' }))

const address = {
  country: 'korea',
  city: 'seoul',
}

const target01 = {
  birth: {
    year: '1992',
    month: '01',
    day: '25n',
  },
  address,
}

const target02 = {
  address,
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

const { birth: destructureBirth } = JSON.parse(JSON.stringify(target01))
const { address: destructureAddress } = JSON.parse(JSON.stringify(target01))
const { address: cloneTargetAddress } = clone(target01)
const { address: assignAddress } = Object.assign({}, target01)

console.log('assignAddress === address: ', assignAddress === address)
console.log(
  'assignAddress === cloneTargetAddress: ',
  cloneTargetAddress === address
)

console.log('===== shallow copy =====')
console.log('target01.address === address =>', target01.address === address)
console.log(
  'target01.address === target02.address =>',
  target01.address === target02.address
)
console.log('===== deep copy =====')
console.log(
  'target01.birth === destructureBirth =>',
  target01.birth === destructureBirth
)
console.log(
  'target01.address === destructureAddress =>',
  target01.address === destructureAddress
)
console.log('address === destructureAddress =>', address === destructureAddress)
