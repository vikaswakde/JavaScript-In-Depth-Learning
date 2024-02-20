// const counter  = (number) => {
//     // take number and reduce it till 0
//     // let startNumber = number
//     while(number >= 0){
//         console.log(number);
//         number--;
//     }
// }

// const counter = (number) => {
//     for(let i = number;  i >= 0; i-- ){
//         console.log(i)
//     }
// }

const counter = (number) => {

    console.log(number)
    if (number === 0) return;

    counter(number - 1)

}


counter(10)
