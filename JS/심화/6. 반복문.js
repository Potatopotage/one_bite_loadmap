let arr1 = [1, 2, 3]

// 배열 인덱스
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// for of
for (let num of arr1) {
    console.log(num)
}

// 객체 순회
let person = {
    name: '승주',
    age: 25
}

// 객체의 키 값만 배열로 반환
let keys = Object.keys(person)

// 객체의 value 값만 배열로 반환
let values = Object.values(person)

// for in
// 객체만을 위한 문으로 객체의 key값을 넣어줌
for (let key in person) {
    console.log(key)
}

// for of는 배열에만 for in은 객체에만!