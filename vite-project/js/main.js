import "../styles/style.css";
import "../styles/variable.css";
import "./monkeys";
import "./dom";
import { setupCounter } from "./counter.js";
import { monkeys } from "./monkeys";
import { DOMSelectors } from "./dom";

document.querySelector("#app").innerHTML = `
    <h1>Pet Monkeys</h1> 
    <div class="buttons">
    <button class="light">Light</button>
    <button class="dark">Dark</button>
    <button class="male">Male</button>
    <button class="female">Female</button>
    <button class="age">Old</button>
    <button class="expensive">Expensive</button>
    <button class="available">Available</button>
    <button class="smart">Smart</button>
  </div>`;

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

document.querySelector(".male").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.gender === "male")
    .forEach((monkey) => console.log(monkey.name));
});

document.querySelector(".female").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.gender === "female")
    .forEach((monkey) => console.log(monkey.name));
});

document.querySelector(".age").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.age > "15")
    .forEach((monkey) => console.log(monkey.name));
});

document.querySelector(".expensive").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.price > "$1000")
    .forEach((monkey) => console.log(monkey.name));
});

document.querySelector(".available").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.available === true)
    .forEach((monkey) => console.log(monkey.name));
});

document.querySelector(".smart").addEventListener("click", function () {
  monkeys
    .filter((monkey) => monkey.smart === "yes" && monkeys.smart === "sorta")
    .forEach((monkey) => console.log(monkey.name));
});

monkeys.forEach((monkey) => {
  DOMSelectors.display.insertAdjacentHTML(
    "beforebegin",
    `<div class="display">
<div class= "display-card">
<h1 class="name">${monkey.name}</h1>
<img class= "display-img" src="${monkey.img}">
<h3 class="type"> Species:${monkey.species}</h3>
<h3 class= "price> Price:${monkey.price}</h3>
<h3 class="old"> Age:${monkey.age}</h3>
<h3 class="gender"> Gender:${monkey.gender}</h3>
<h3 class="availability"> Available:${monkey.available}</h3>
<h3 class="IQ"> Smart:${monkey.smart}</h3>
</div>
</div>`
  );
});

setupCounter(document.querySelector("#counter"));
