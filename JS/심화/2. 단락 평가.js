// 논리 연산자를 이용한 계산에서 첫번째 값으로 결과를 낼 수 있다면, 두 번째 값에는 접근하지 않는다

function returnFalse () {
    console.log('false')
    return false
}

function returnTrue () {
    console.log('true')
    return true
}

console.log(returnFalse() && returnTrue()) // false false
// 첫 번째 값 만으로도 결과가 나왔기 때문에 두 번째 값에는 아예 접근을 하지 않는다 // 호출 자체를 하지 않음

function printName (person) {
    const name = person && person.name
    console.log( name || '값이 없음' )
}