// forEach
// 배열을 모두 순회하면서 각각의 요소에 특정 동작을 수행
let arr1 = [1, 2, 3]

arr1.forEach(function (item, idx, arr) {
    console.log(item)
})

arr1.forEach((item) => console.log(item + 2))

// includes
// 배열에 특정 값이 있는지 확인
let isInclude = arr1.includes(1) //true

// indexOf
// 특정 요소의 인덱스 반환
// 같은 값이 있으면 가장 먼저 나오는 인덱스 반환
// 존재하지 않으면 -1 반환
let index = arr1.indexOf(2) // 1

// findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환
// 만족하는 가장 첫 요소의 인덱스를 반환
arr1.findIndex((item)=> item === 2)

// indexOf는 얕은 비교로 작동해서 객체값을 잘 찾지 못함 >> 이런 경우 findIndex 사용

// find
// 모든 요소를 순회하면서 callback 함수를 만족하는 요소를 찾고, 그 요소를 그대로 반환
arr1.find((item) => item == 2) // 2