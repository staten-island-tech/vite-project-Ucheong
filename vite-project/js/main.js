import "../styles/style.css";
import "./monkeys";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { monkeys } from "./monkeys";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
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
