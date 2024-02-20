// unique
// hide from loops;;;;

/*
const mySymbol = Symbol();

console.log(typeof(mySymbol))


console.log(mySymbol)

*/

/*

const character  = {
    name: "Ricky Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    [Symbol("name")]: "vikas",
    [Symbol("age")]: 20,
    [Symbol("admin")]: true,
}


for(const key of Object.keys(character)){
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(character));


*/
/*
const character = {
    name: "Ricky Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    __admin__: false,
    [Symbol.iterator]: function* (){
        yield 1;
        yield 2;
        yield"Hello World";
        yield*["one","Two","three", "four"];
    }
}


for(const value of character){
    console.log(value)
}

*/
/*

const baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey");
const monkey = Symbol("Baboon");


console.log(typeof baboon);
console.log(typeof gorilla);

console.log(baboon.description);
console.log(gorilla.description)

console.log(baboon === gorilla);

*/
/*
const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1992,
  rating: 89,
  genre: "Science Fiction",
//   [Symbol("buget")]: 30,
//   [Symbol("boxoffice")]: 41.6,
};

movie[Symbol("budget")]  = 30;
movie[Symbol("boxOffice")] = 41.6;

for(const [key, value] of Object.entries(movie)) {
    console.log(`${key} => ${value} `);
}

console.log(Object.getOwnPropertySymbols(movie))


*/

/*

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

book[Symbol.iterator] = function* () {
  const entries = Object.entries(book);
  for(const [key,value ] of entries){
    console.log(`This is key: ${key} => This is it's value: ${value}`)
  }
};


for(const [key, value] of book){
    console.log(`This is key: ${key} => This is it's value: ${value}`)
}


*/



const book = {
    name: "1984",
    author: "George Orwell",
    year: 1949,
    rating: 4.6,
    genre: "Science Fiction",
    movie: true,
}

book[Symbol.asyncIterator] = async function* () {
    const objectEntries = Object.entries(book);
    for(const entry of objectEntries){
        yield new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(entry)
            },1000)
        })
    }
}


const asyncBookExecuter = async () => {
    for await (const entry of book){
        console.log(entry)
    }
}

asyncBookExecuter()







