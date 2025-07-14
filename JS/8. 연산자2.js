// 1. null 병합 연산자  
// null, undefined가 아닌 값을 찾아냄

let var1 
let var2 = 10

let var3 = var1 ?? var2 //var2

// 둘 다 null이나 undefined가 아니면 첫 변수를 가짐

// 2. typeof 연산자
// 값의 type을 문자열로 변환
let var4 = 'hello'
let t1 = typeof t1 //string