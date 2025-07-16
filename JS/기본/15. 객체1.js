// 객체 생성
let obj1 = new Object()
let obj2 = {}

let person = {
    name: '윤승주',
    age: 25,
    // 띄어쓰기가 포함 된 키 값은 따옴표 안에 넣어야 함
    'wanna go home': true

}

// property 접근 법
let name = person.name

// 따옴표 안에 써 줘야 함
let age = person['age']

// property 추가법
person.job = '백수'
person['condition'] = '고됨'

// property를 수정하는 방법
// 추가랑 다를 거 없음
person.condition = '중됨'

// property를 삭제하는 방법
delete person.job

// property의 존재 유무를 확인하는 방법
let result1 = 'name' in person //true
let result2 = 'job' in person //false