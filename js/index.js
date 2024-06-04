// import { CardComponent } from "../components/CardComponent.js";
// // import { products } from "../data/product.js";
// let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
// products
//   .slice(0, 10)
//   .map((product) => (renderArea.innerHTML += CardComponent(product)));

import { CardComponent } from "../components/CardComponent.js";
 let renderArea = document.querySelector("#renderArea");

 const url = "http://127.0.0.1:5500/data/product.json";

fetch(url)
  .then((res) => res.json())
  .then((datas) => {
    let products = datas;
    products.map((product) => (renderArea.innerHTML += CardComponent(product)));
  });