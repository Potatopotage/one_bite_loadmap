// promise
// 비동기 작업을 감싸는 객체

// Promise의 3가지 상태
// 대기(Pending)
// 대기 >> 성공: resolve
// 성공(fullfilled)
// 대기 >> 실패: reject
// 실패(rejected)

// Promise 객체 생성
// resolve: promise 함수를 성공 상태로 바꾸는 함수
// reject: promise 함수를 reject 상태로 바꾸는 함수
const promise1 = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수(executer)
    setTimeout(() => {
        console.log('executer')
        resolve() // Promise 상태를 fullfilled로 바꿔줌 
    }, 3000);
})

setTimeout(() => {
    console.log(promise1)
}, 3000);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        if (typeof num === 'number') {
            resolve(num)
        } else {
            reject('숫자가 아닙니다')
        }
    }, 3000);
})

// then
// promise의 비동기 작업이 성공했을 때만 호출
promise2.then((value) => {
    console.log(value)
})

// catch
// promise가 실패했을 때의 실패함수
promise2.catch((error) => {
    console.log(error)
})

// 연결해서 써도 됨
promise2
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })