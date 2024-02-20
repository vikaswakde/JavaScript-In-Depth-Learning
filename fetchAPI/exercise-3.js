import fetch from "node-fetch";

import fs from "fs/promises";

// // Blob --> Binary large object
// fetch("https://w.wallhaven.cc/full/ex/wallhaven-exrqrr.jpg")
//   .then((response) => response.arrayBuffer())
//   .then((img) => {
//     fs.writeFile("wallpaper.jpg", Buffer.from(img));
//   });

const imgDown = async () => {
    const fetchImg = await fetch("https://w.wallhaven.cc/full/o5/wallhaven-o5762l.png");
    const getImgData = await fetchImg.arrayBuffer();
    await fs.writeFile('study-wallpaper.png',Buffer.from(getImgData))
    console.log("Study-wallpaper.png created successfully!")

}

imgDown()