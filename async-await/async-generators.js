// let's first get hands on promises

/*
const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello 1 sec time here!!!");
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello, 3 sec time here!!");
    }, 3000);
  });
};

const generatorObject = generator();

for await (const promise of generatorObject) {
  console.log(promise);
}
*/

/*

const asyncGenerator = async function*(){
    yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello I look 2 seconds. !!!")
        },2000)
    })
    yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I took 3 seconds:) !!!")
        },3000)
    })
}

const asyncGeneratorObject = asyncGenerator();


const asyncGeneratorExecuter = async () =>{
    for await (const promise of asyncGeneratorObject){
        console.log(promise)
    }
}

console.log(asyncGeneratorExecuter())

*/

///////////////////////// INFINITE JS ////////////////////////////////////////////////////

/*

const asyncGenerator = async function*(){
    let i = 0;
    while(true){
        yield new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Hello I am infinite Loop, but i dont\'t harm you\'r code.!!!');
            },2000)
        })
    }
}

const asyncGeneratorObject = asyncGenerator();

const asyncGeneratorExecuter = async () =>{
    for await (const promise of asyncGeneratorObject){
        console.log(promise)
    }
}


console.log(asyncGeneratorExecuter())

console.log("Am I running ???")


*/

/*

const asyncGeneratorFunction = async function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 9));
      }, 1000);
    });
  }
  i++
};

const generatorObject = asyncGeneratorFunction();

const asyncFunctionExecutor = async () => {
  for await (const promise of generatorObject) {
    console.log(promise);
  }
};

console.log(asyncFunctionExecutor());
*/
/*
const conditionCheck = async function* () {
  while (true) {
    let randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (randomNumber === 1) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Fast");
        }, 500);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Slow");
        }, 3000);
      });
    }
  }
};

const conditionObject = conditionCheck();

const asyncExecuter = async () => {
  for await (const promise of conditionObject) {
    console.log(promise);
  }
};

console.log(asyncExecuter());
*/

/*
const letterGenerator = async function*(sentence){
    for(const letter of sentence){
        yield new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(['a','e','i','o','u'].includes(letter)){
                    resolve('*');
                }else{
                    resolve(letter.toUpperCase());
                }
            },100)
        })
    }
} 

const letterObject = letterGenerator("Monkeys are the coolest animal!.");

const letterExecuter = async () =>{
    for await (const letter of letterObject){
        console.log(`${letter}`)
    }
}

console.log(letterExecuter())

*/

const backoffGenerator = async function* (time) {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
    time += 50;
  }
};

const backOffObject = backoffGenerator(100);

const backOffExecuter = async () => {
  for await (const ms of backOffObject) {
    console.log(ms);
  }
};

console.log(backOffExecuter());
