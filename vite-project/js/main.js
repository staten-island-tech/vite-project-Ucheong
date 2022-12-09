import "../styles/style.css";
import "./monkeys";
import { setupCounter } from "./counter.js";
import { monkeys } from "./monkeys";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Pet Monkeys</h1> 
  </div>`;

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
