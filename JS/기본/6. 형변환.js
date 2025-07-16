// 형 변환: 어떤 값의 타입을 다른 타입으로 변환

// 1. 묵시적 형변환
// 자바스크립트 엔진이 알아서 변환
let num1 = 10
let str1 = '20'

let result = num1 + str1
// 1020

// 2. 명시적 형 변환
// 프로그래머가 직접 형 변환

// 문자를 숫자로
let num2 = Number(str1)

// 숫자가 일부만 있을 경우 변환
// 숫자가 앞쪽에 있어야 잘 변환된다
let str2 = '10개'
let num3 = parseInt(str2)

// 숫자를 문자로
let str3 = String(num2)