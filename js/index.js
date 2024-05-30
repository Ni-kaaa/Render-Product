import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/product.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  .slice(0, 10)
  .map((product) => (renderArea.innerHTML += CardComponent(product)));