// filter
// 기존 배열에서 조건을 만족하는 요소만 새로운 배열로 반환

let arr1 = [
    {name: '승주', age: 25},
    {name: '재원', age: 28}
]

const isFilterd = arr1.filter((item) => item.age === 25)

// map
// 배열의 모든 요소를 순회하면서 콜백 함수를 실행하고, 그 결과를 배열에 담아서 반환
let arr2 = [1, 2, 3]

const mapResult1 = arr2.map((item) => {
    return item * 2
})

// 화살표 함수에서 중괄호를 쓰지 않으면 명시적으로 return임
const mapResult2 = arr2.map((item) => item * 2)

// sort
// 배열을 사전순으로 정렬
let arr3 = ['b', 'a', 'c']

arr3.sort() // ['a', 'b', 'c']

// sort를 이용하여 숫자를 오름/내림차순으로 정리하는 방법
// sort 함수는 인자 2개를 매개변수로 받는데 값이 0 미만이면 a를 b보다 앞에, 0 초과면 b를 a보다 앞에 0이면 그대로 둔다


let arr5 = [5, 3, 2]

// 오름차순 정렬
arr5.sort((a, b) => a - b)

// 내림차순 정렬
arr5.sort((a, b) => b - a)


// toSorted
// 원본 배열을 사전순으로 정렬하여 새로운 배열을 반환(원본 배열 수정x)

// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr4 = ['hi', 'bye']
// 명시하지 않으면 ,로 split
const joined1 = arr4.join() // hi, bye
const joined2= arr4.join(' ') // hi bye