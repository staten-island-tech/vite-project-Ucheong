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

document.querySelector(".age").addEventListener("click", function () {
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

setupCounter(document.querySelector("#counter"));
