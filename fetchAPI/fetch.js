import fetch from "node-fetch";

// const response = fetch("https://www.twitter.com");

// response
//   .then((result) => {
//     return result.text();
//   })
//   .then((html) => {
//     console.log(html);
//   });

// using async await function

// const fetchData = async () => {
//   const result = await fetch("https://www.wallhaven.cc");
//   const html = await result.text();
//   console.log(html);
// };


// fetchData()

const fetchData = async () => {
    const result = await fetch("https://www.wallhaven.cc");
    const html = await result.text();
    console.log(html)
}

fetchData();