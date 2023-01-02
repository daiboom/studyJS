// const client = new XMLHttpRequest()
// client.open('GET', 'https://dummyjson.com/products/1')
// client.setRequestHeader('Cache-Control', 'no-cache')
// client.send()
const fetch = require('node:fetch')
fetch('https://dummyjson.com/products/1').then((res) => {
  console.log('res')
})
