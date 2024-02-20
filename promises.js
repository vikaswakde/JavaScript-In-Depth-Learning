/*
console.log("Program started")

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("The Program complete...")
    },3000)
})
myPromise.then((value)=>{
    console.log(value)
})

console.log(myPromise)
console.log("program in progress...")

*/

/*
console.log("Program Started")

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },3000)
    setTimeout(()=>{
        reject()
    },2000)
})


myPromise.then(()=>{
    console.log("Program complete")
}).catch(() =>{
console.log("Program failure")
})

console.log(myPromise)
console.log("Program in Progress")
*/
/*
console.log("Program Started");

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

newPromise
  .then(() => {
    console.log("Step 1 complete");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    console.log("Step 2 complete");
  });

console.log(newPromise);
console.log("Program in Progress....");
*/
/*
console.log("Program started")

const newPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({data: "Hello, friend!", error: null,})
  },5000)
}).then((resolvedValue)=>{
  console.log(resolvedValue)
  setTimeout(()=>{
    resolve("First Promise chain Complete!")
  },2000)
}).then((resolvedValue)=>{
  console.log(resolvedValue)
  setTimeout(()=>{
    resolve("Second promise chain complete!")
  },10000)
}).then((resolvedValue)=>{
  console.log(resolvedValue)
})




console.log(newPromise)
console.log("Program in Progress...")

*/
/*
console.log("Program Started!")

const myPromise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve({data: "Hello, friend!", error: null})
  }, 5000);
})

console.log(myPromise)
console.log("Program in progress....")

myPromise.then((val)=>{
  console.log(val)

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("First promise chain complete")
    },2000)
  })
}).then((val)=>{
  console.log(val)
})









myPromise.then((val)=>{
  console.log(val)

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Second Promise chain complete!")
    },10000)
  })
}).then((val)=>{
  console.log(val)
})


*/


/*

const promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(10)
  },3000)
})

const promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(20)
  },5000)
})

Promise.all([promise1, promise2]).then((val)=>{
  console.log(val[0] + val[1])
})


*/










async function foo() {
  const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(10)
    },2000)
  });
  const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(20)
    },3000)
  })

  const values = await Promise.all([promise1, promise2]);
  console.log(values[0] + values[1])

}



console.log(foo())
















