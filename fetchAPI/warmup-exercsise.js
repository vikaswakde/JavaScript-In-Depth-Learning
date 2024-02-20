import fetch from "node-fetch";

// const fetchData = async () => {
//     const result = await fetch('https://www.craigslist.org/about/');
//     const html = await result.text();
//     console.log(html);
// };

// fetchData();

fetch("https://www.craigslist.org/about/").then((response) => {
  return response.text();
}).then((html)=>{
    console.log(html)
})


