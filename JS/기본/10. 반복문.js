// for문
for (let i = 0; i < 5; i ++) {
    // 다음 회차를 진행
    if (i === 0) {
        continue
    }
    console.log('반복')
    // 반복 중단
    if (i >= 3) {
        break
    }
}


