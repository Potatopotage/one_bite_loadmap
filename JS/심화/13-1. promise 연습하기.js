// function add (num) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof num === 'number') {
//                 resolve(num + 10)
//             } else {
//                 reject('숫자가 아닙니다')
//             }
//         })
//     })
// }

// add(null)
// .then((value) => {
//     console.log(value)
//     return add(value)
// }).then((value) => {
//     console.log(value)
//     return add(value)
// }).catch((value)=>{
//     console.log(value)
// })



function add (num) {
    return new Promise()
}