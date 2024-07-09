// console.log("hello")

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("rejected");
//     }
//     else {
//         setTimeout(() => {
//             console.log("resolved")
//             resolve("chirag")
//         }, 1000);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })



//Async and Await


// method without async await 

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// console.log("Loding modusl")
// console.log("Do something else")
// console.log("Load data")
// let data = getData()

// data.then((v) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// })


//Using async await

// async function getData() {
//     //simmulating getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

//Fetch API

async function getData() {
    //simmulating getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}

async function main() {
    console.log("Loding modusl")
    console.log("Do something else")
    console.log("Load data")
    let data = await getData()
    console.log(data)
    console.log("process data")
    console.log("task 2")
}
main()