function add (a, b, callback) {
    setTimeout (() => {
        const sum = a + b
        callback(sum)
    }, 3000)
}

add(1, 2, (value) => {
    console.log(value)
})

function orderFood(callback) {
    setTimeout(() => {
        const food = '떡볶이'
        callback(food)
    }, 3000)
}

function coolDown(food, callback) {
    setTimeout(() => {
        const coolDownd = `식은 ${food}`
        callback(coolDownd)
    }, 3000);
}

function freeze (food, callback) {
    setTimeout(() => {
        const freezed = food
        callback(freezed)
    }, 1000);
}

orderFood(food => {
    console.log(food)
    // 비동기 작업의 결과를 또 다른 비동기 함수의 인자로 전달 
    coolDown(food, coolDownd => {
        console.log(coolDownd)

        freeze(food, freezed => {
            console.log(freezed)
        })
    })

})