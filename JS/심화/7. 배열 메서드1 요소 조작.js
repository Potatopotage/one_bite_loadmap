let arr = [1, 2, 3]

// push
// 배열의 맨 뒤에 새로운 요소를 추가
// 추가하고 변환된 배열의 길이를 반환
arr.push(4)
const length = arr.push(5, 6, 7) //7

// pop
// 배열 맨 뒤의 요소를 제거하고 변환된 배열의 길이를 반환
arr.pop()

// shift
// 배열 맨 앞의 요소를 제거하고 변환된 배열의 길이를 반환
arr.shift()

// unshift
// 배열의 맨 앞에 요소를 추가하고 변환된 배열의 길이를 반환
arr.unshift(1)

// slice
// 배열의 특정 범위를 잘라내서 새로운 배열을 반환
// 잘라내도 원본 배열의 값이 변하지는 않음
let arr2 = arr.slice(2, 4) //시작 인덱스, 끝 인덱스 + 1

// concat 
// 두 개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환

let arr3 = [1, 2]
let arr4 = [3, 4]

let arr5 = arr3.concat(arr4) // [1, 2, 3, 4]

