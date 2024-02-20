/*
const array1 = [1, 2, 3, 4];

// 0+1+2+3+4
const initalValue = 0;
const sumWithInital = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, initalValue);


console.log(sumWithInital)

*/
/*
const nums = [5,10, 15, 20, 25, 30, 35]

const sum = nums.reduce((result, number)=>{
    return result + number
},0)

// console.log(sum)

const animals = ["monkey", "dog", "cat", "koala"];

const concatAnimals = animals.reduce((result, animal)=>{
    return result + animal + ","
},"")

console.log(concatAnimals)

*/

/*

const nums = [5,10,15,20,25,30,35];

const reduceNums = nums.reduce((result, num)=>{
  result.push(num)
  return result
},[])

console.log(reduceNums)

*/
/*
const points = []

for(let i = 55; i<=60; i++){
  points.push(i)
}

const  sum = points.reduce((result, point)=>{
  return result + point
},0)

console.log(sum)

*/
/*

const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((accumulator, currentValue, currentIndex)=>{
  if (currentValue.startsWith('a')){
    return accumulator
  } 
  if (currentIndex === companies.length -1 ){
    return accumulator + currentValue
  }

  return accumulator + currentValue + '-'

}, "")


console.log(modded)
*/

/*

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5, 2];

const afterTax = prices.reduce((accumulator, currentValue)=>{
  if (currentValue > 6){
    return accumulator + currentValue
  } 
  return accumulator + currentValue * 1.2
}, 0)



console.log(afterTax);

*/
/*

const items = ["light", "banana", "phone", "book", "mouse"].map((item)=>{
  return item.toUpperCase()
}).reduce((accumulator, currentValue, currentIndex, sourceArray)=>{
  if (currentIndex === sourceArray.length-1){
    return accumulator + currentValue 
  }
  return accumulator + currentValue + "<-->"
},"")

console.log(items)
*/

const nums = [10, 30, 50, 70, 90]
  .map((num) => num ** 2)
  .filter((num) => (num > 1000 ? true : false))
  .reduce((sum, num) => {
    return sum + num;
  }, 0);

// const squares = nums.map((num) => {
//   return num ** 2;
// });

// const over1000 = squares.filter((square)=>{
//   return  square > 1000 ? true : false
// })

// const finale = over1000.reduce((sum, num)=>{
//   return sum + num
// },0)

console.log(nums);
