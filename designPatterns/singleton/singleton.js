function Univers() {
  // 인스턴스 캐싱하기
  let instance

  // 생성자 재작성
  Univers = function Univers() {
    return instance
  }

  // prototype 변경
  Univers.prototype = this

  // instance
  instance = new Univers()
  // 생성자 포인터를 재지정
  instance.constructor = Univers
  instance.start_time = 0
  instance.bang = 'Big'

  return instance
}

const univers = new Univers()
const univers2 = new Univers()

console.log(univers)
console.log(univers2)
console.log(univers === univers2)
