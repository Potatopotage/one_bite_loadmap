// Date 객체 생성하기
// 현재 시간을 저장
let date1 = new Date() // 생성자

// 특정 시간을 지정
let date2 = new Date('1999-11-12')

// 타임 스탬프
// 특정 시간이 1970.1.1(UTC) 일으로부터 몇 ms가 지났는지를 의미하는 숫자값

// gettime
// date1에 저장되어있는 시간을 타임스탬프로 계산하여 반환
let ts1 = date1.getTime()
let date3 = new Date(ts1)

// 시간 요소들을 추출하는 방법
let year = date1.getFullYear()
// 월은 0부터 시작
let moneth = date1.getMonth() + 1
let date = date1.getDate()
let hour = date1.getHours()
let minute = date1.getMinutes()
let second = date1.getSeconds()

// 시간 수정하기
date1.setFullYear(2025)
date2.setMonth(6)
date2.setDate(17)
date2.setMinutes(22)
date2.setSeconds(12)

// 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()) // Thu Mar 30 2025
console.log(date1.toLocaleString) // 2025. 7. 17 오후 8:51:20