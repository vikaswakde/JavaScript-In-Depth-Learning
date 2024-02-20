// filter()

/*

const nums = [5,6,7,8,9,10];


const oddNumbers = nums.filter((num)=>{
    if(num % 2 !== 0){
        return true
    } 
    return false;

})

console.log(oddNumbers)

*/
/*
const practice = []
for(let i=10; i<=20; i++){
    practice.push(i)
}

const evens = practice.filter((num)=>{
    if(num % 2 == 0){
        return true
    }
    return false
})

console.log(practice)
console.log(evens)

*/
/*
const countries = ["India", "France", "South Africa", "Brazil,", "United States", "Sweden"];

const blankspaceCountries = countries.filter((country)=>{
    if(country.includes(' ')) {
        return true
    } 
    return false
})

console.log(blankspaceCountries)

*/

/*
const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]


const lowPrices = prices.filter((price)=>{
    if(price * 1.15 < 10.00){
        return true
    }
    return false
})

console.log(lowPrices)

*/
/*
const values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

const hasTwos = values.filter((value) => {
  if (value.includes(2)) {
    return true;
  }
  return false;
});

console.log(values);

console.log(hasTwos);
*/

// const nums = [10,20,30,40,50]
/*
const timesTwo = nums.map((num)=> {
    return num * 2
})


const over50 = timesTwo.filter((num)=>{
    if(num > 50){
        return true;
    }
    return false;
})

console.log(nums)
console.log(timesTwo)
console.log((over5))  

*/

const nums = [10,20,30,40,50].map((num)=>{
    return num *2
}).filter((num)=>{
    if(num > 50){
        return true
    }
    return false
})

console.log(nums)