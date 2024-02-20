// import fetch from 'node-fetch';

// const jsonFetch = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const json = await data.json()
//     console.log(json)
// }
// jsonFetch();

import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((result)=>{
    console.log(result)
    console.log(result.id)
    console.log(result.title)
});

