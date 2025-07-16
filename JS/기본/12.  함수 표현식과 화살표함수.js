// 1. 익명함수(함수 표현식) //호이스팅 되지 않음
// 바로 변수에 담아주기
let greeting = function () {
    console.log('hello')
}

greeting()

// 2. 화살표함수
let var1 = () => {
    console.log('hello')
}

let var2 = () => console.log('hello')

var1()
var2()
