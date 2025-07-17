// 배열의 구조 분해 할당 
let arr = [1, 2, 3]

let [a, b, c] = arr

console.log(a) // 1
console.log(b) // 2

// 객체의 구조 분해 할당
let person = {
    name: '윤승주',
    age: 25
}

// 할당하면서 이렇게 새로운 값 넣어줄 수도 있음
let { name, age, extra='hello' } = person

// 매개변수 활용
const func = ({ name, age, extra }) => {
    console.log(name)
    console.log(age)
    console.log(extra)
}

// 객체를 넘겨줘야 함
func(person)