const answer = (func) => {
  console.time('[Answer]')
  console.log(func)
  console.timeEnd('[Answer]')
}

module.exports = answer
