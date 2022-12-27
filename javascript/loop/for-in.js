const chrome = {
  runtime: 'v8',
  type: 'browser',
}

if (typeof Object.prototype.clone === 'undefined') {
  Object.prototype.clone = function () {}
}

for (let key in chrome) {
  if (chrome.hasOwnProperty(key)) {
    console.log('============== positive pattern ==============')
    console.log(key, chrome[key])
  }
}

for (let key in chrome) {
  console.log('============== negative pattern ==============')
  console.log(key, chrome[key])
}
