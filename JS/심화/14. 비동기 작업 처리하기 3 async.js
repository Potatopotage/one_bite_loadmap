// async
// 함수를 비동기 함수로 만들어주는 키워드
// 함수가 Promise를 반환할 수 있도록 해줌

async function getData() {
    return 'Hello'
}

// awiat
// async 함수 내부에서만 사용 가능
// 비동기함수가 처리되기를 기다리는 역할

async function printData() {
    const data = await getData()
    console.log(data)
}