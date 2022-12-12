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
  </div>`;

document.querySelector(".light").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

document.querySelector(".dark").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

monkeys
  .filter((monkey) => monkey.gender === "male")
  .forEach((monkey) => console.log(monkey.name));
monkeys
  .filter((monkey) => monkey.age > "15")
  .forEach((monkey) => console.log(monkey.name));
monkeys
  .filter((monkey) => monkey.available === true)
  .forEach((monkey) => console.log(monkey.name));
monkeys
  .filter((monkey) => monkey.price > "$1000")
  .forEach((monkey) => console.log(monkey.name));
monkeys
  .filter((monkey) => monkey.smart === "no")
  .forEach((monkey) => console.log(monkey.name));
const monkeys2 = monkeys.price.map((monkey) => monkey * 2);
console.log(monkeys2);

setupCounter(document.querySelector("#counter"));
