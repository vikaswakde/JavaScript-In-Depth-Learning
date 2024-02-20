const monkey = {
  name: "Abu",
  species: "Capunchin",
  hobbies: ["stealing"],
};
const printMonkey = () => {
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve(monkey)
    },3000))
  console.log(monkey.name);
};

const awaitedMonkey = await printMonkey();
// console.log(typeof printMonkey);
// console.log(typeof awaitedMonkey);
export default awaitedMonkey;