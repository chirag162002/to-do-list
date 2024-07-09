async function Sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// IIFE - immediate invoking
// (async function main() {
//     let a = await Sleep()
//     console.log(a);
//     let b = await Sleep()
//     console.log(b);
// })()

// Dstructuring
(async function main() {
    // let [x,y] = [8,10]
    // console.log(x,y)
    let [x, y, ...rest] = [8, 10, 2, 3, 5, 1, 6]
    console.log(x, y, rest)

    let obj = {
        a: 1,
        b: 2,
        c: 3

    }
    let { a, b, c } = obj
    console.log(a, b, c)
})()
