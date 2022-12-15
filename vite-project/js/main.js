import "../styles/style.css";
import "../styles/variable.css";
import "./monkeys";
import { setupCounter } from "./counter.js";
import { monkeys } from "./monkeys";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Pet Monkeys</h1> 
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
    .filter((monkey) => monkey.smart === "yes")
    .forEach((monkey) => console.log(monkey.name));
});

function card() {
  DOMSelectors.display.insertAdjacentHTML("afterbegin"),
    `<div class= "display-card">
    <h1 class="name">${monkeys.name}</h1>
    <h2 class="type">${monkeys.species}</h2>
    <img class= "display-img" src="${monkeys.img}">
    <h3 class= "price> ${monkeys.price}</h3>
    <h3 class="age"> ${monkeys.age}</h3>
    <h3 class="gender">${monkeys.gender}</h3>
    <h3 class="available">${monkeys.available}</h3>
    <h3 class="IQ">${monkeys.smart}</h3>
     </div>`;
}
// gender, availability, IQ
setupCounter(document.querySelector("#counter"));
