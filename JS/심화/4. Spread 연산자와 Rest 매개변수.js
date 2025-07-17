// Spread 연산자
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

let obj1 = {
    a: 1, 
    b: 2
}

let obj2 = {
    ... obj1,
    c: 3,
    d: 4
}


function func () {}

func(...arr1)
// func(1, 2, 3)

// Rest 매개변수
// REST 매개변수 뒤에는 추가적으로 매개변수를 넣을 수 없음
function func1 (... rest) {
    console.log(rest) // [1, 2, 3]
}

func1(...arr1)