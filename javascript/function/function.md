# Function
일급객체이다. 
## 기명함수
```js
function namedFunction(){

}
```
## 렉시컬 기명함수
```js

```
## 익명함수
```js
function (){

}
```
## 렉시컬 익명함수
```js

```
## 즉시실행 함수
```js
(()=>{

})()

(function(){

})()
```
## 화살표 함수
화살표 함수는 es6에 생긴 함수이다.
화살표 함수에는 3가지가 없다.
`this`, `arguments`, `super`가 없다.
```js
const arrowFunc = () => {

}
```
## 생성자함수
```js
function ConstructorFunction(){
}

const conFunc = new Constructor()
```
## 제네레이터 함수

```js
function* genFunction(){
    yield
    done
}
```