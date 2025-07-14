// if문
let num = 10

if (num >= 10) {
    console.log('num은 10 이상입니다')
}
else if (num >= 5) {
    console.log('어떤문장')
}
else {
    console.log('num은 10 미만입니다')
}

// 2. switch문

let animal = 'cat'

switch (animal) {
    // 기본적으로 맞는 case를 찾으면 그 뒤의 case 문을 모두 실행하니 원하지 않을 시 break 걸어주기
    case 'cat': {
        console.log('고양이')
        break
    }
    case 'dog': {
        console.log('강아지')
    }
    // 어떤 case도 해당하지 않을 때 실행
    default: {
        console.log('기타')
    }
}