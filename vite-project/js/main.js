import "../styles/style.css";
import "./monkeys";
import { setupCounter } from "./counter.js";
import { monkeys } from "./monkeys";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite!</h1>`;

monkeys
  .filter((monkey) => monkey.gender === "male")
  .forEach((monkey) => console.log(monkey.gender));
monkeys
  .filter((monkey) => monkey.age > "15")
  .forEach((monkey) => console.log(monkey.age));
monkeys
  .filter((monkey) => monkey.available === true)
  .forEach((monkey) => console.log(monkey.available));
monkeys
  .filter((monkey) => monkey.price > "$1000")
  .forEach((monkey) => console.log(monkey.price));
monkeys
  .filter((monkey) => monkey.smart === "no")
  .forEach((monkey) => console.log(monkey.smart));
const monkeys2 = monkeys.price.map((monkey) => monkey * 2);
console.log(monkeys2);

setupCounter(document.querySelector("#counter"));
