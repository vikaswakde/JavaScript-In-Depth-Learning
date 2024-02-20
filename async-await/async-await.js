/*
const makeTimeout = (ms) =>{
    const timeout = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All done!")
        },ms)
    })
    return timeout
};

console.log("Program starting...")

makeTimeout(1000).then((result)=>{
    console.log(result)
})

const fetchStuff = async () => {
    const result = await makeTimeout(1000);
    console.log(result)
}

fetchStuff()

*/

/*
const makeTimeout = (ms) => {
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello from setTimeout")
        },ms)
    })
    return myPromise
}


const fetchStuff  = async() =>{
    const result = await makeTimeout(1000)
    console.log("from async ", result)
}


fetchStuff()

*/

/*
// Pausing in async/await

const makeTimeout = (ms) =>{
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello World")
        },ms)
    })
    return myPromise
}

console.log("Program Starting .....")

const fetchData = async () => {
    console.log("Fetching 1'st data set..")
    const result1 = makeTimeout(2000);

    console.log("Fetching 2'nd data set..")
    const result2 = makeTimeout(2000)

    const finalResult = await Promise.all([result1, result2]);
    console.log("Done fetching data!", finalResult)
}

fetchData()

*/

// errors in async/await

/*


const makeTimeout  = (ms) =>{
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("You got rejeted form my Promise, Wish you luck next time.")
        },ms)
    })
    return myPromise
}


const causeError = async () =>{
    try{
        const result = await makeTimeout(2000);
        console.log(result)
    } catch(error){
        console.log("we are in the error case, all done.")
        console.log(error)
    }
}

console.log("program start")
causeError()
console.log("Just check in the program")

*/

/*


const fetchPokemon = () =>{
    const pokemonPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Danger, danger!!!"))
            // resolve({data: {name: "Pickachu", power: 20}})
        },2000)
    })
    return pokemonPromise
}

console.log("Program starting....")

const pokemonAsync = async () => {
    try{
        const result = await fetchPokemon()
        console.log(result)
    }catch(error){
        console.log(error)
    }

}

pokemonAsync()
console.log("Program complete...")

*/

/*

const fetchPokemon = () =>{
    const newPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("You have Error!"))
        },2000)
    })
}


const usePokemmon = async() => {
    try{
        const result = await fetchPokemon()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
    console.log("This is just to show you that, even though our code has error, i ran sucessfully, because of try/catch block")
}

console.log("Program starting ")
usePokemmon()
console.log("Program sucess!!")

*/

/*

const fetchUser = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Monkey", admin: true } });
    }, 3000);
  });
  return myPromise;
};

const login = (objectArgument) => {
  try {
    if (objectArgument.data.admin === true) {
      console.log("Successfully logged in!");
    }
  } catch (error) {
    console.log("Failed to log in, Please try again.");
    console.log(error);
  }
};

console.log("Program starting");

const userData = async () => {
  const user = await fetchUser();
  console.log(user.data.admin);
  login(user);
};

userData();
console.log("Program complete!");

*/

/*







const fetchFast = () => {
    const fastPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Fast Done!")
        },2000)
    })
    return fastPromise
}

const fetchSlow = () => {
    const slowPromise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("Slow Done!")
        },6000)
    })
    return slowPromise
}

console.log("Program Starting...")
/////////////////////////////////////////////////////
// ---> 8 secs
// const fetchCall = async () => {
//     const dataFetchFast = await fetchFast();
//     console.log(dataFetchFast)

//     const dataFetchSlow = await fetchSlow();
//     console.log(dataFetchSlow)

// }


////////////////////////////////////////////
// ---> 6 secs
// const bothFetchCall = async () => {
//     const dataFetchFast = fetchFast();
//     const dataFetchSlow = fetchSlow();

//     const bothFetch = await Promise.all([dataFetchFast, dataFetchSlow])
//     console.log(bothFetch)
// }

bothFetchCall();

console.log("Program Complete!!")


*/

/*()
const firstTimeStamp = new Date()

const secondTimeStamp = new Date()


+const snapShot = firstTimeStamp - secondTimeStamp

console.log(snapShot)


*/

/*
const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quanity: 10 });
    }, 2000);
  });
};

const sellCandies = (candyObject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = candyObject.quanity * 25;
      resolve(result)
    }, 3000);
  });
};

*/

const sales = async () => {
    const getcandyDetails = goGetCandies();
    const salesData = sellCandies(getcandyDetails);
    const result = await Promise.all([getcandyDetails, salesData])
    console.log()

}

sales()



const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies = (candyObject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = candyObject.quantity * 25;
      resolve(result)
    });
  });
};

goGetCandies.then((result) => {
    const salesData =  sellCandies(value)
    console.log(salesData)
}).catch((err) => {
   console.log(err) 
});

