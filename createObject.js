function CreateObject() {
  // private member
  const name = 'daiboom'

  // public member
  this.getName = () => {
    return name
  }
}

const obj = new CreateObject()
console.log('obj: ', obj.constructor)
console.log('obj: ', obj)
console.log('obj: ', obj.getName())

CreateObject.prototype = (function () {
  const browser = 'chrome'

  return {
    ...CreateObject.prototype,
    getBrowser: function () {
      return browser
    },
  }
})()

const obj1 = new CreateObject()
console.log('obj1: ', obj1.constructor)
console.log('obj1: ', obj1.getName())
console.log('obj1: ', obj1.getBrowser())
