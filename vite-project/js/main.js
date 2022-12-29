import "../styles/style.css";
import "./monkeys";
import "./dom";
import { monkeys } from "./monkeys";
import { DOMSelectors } from "./dom";

monkeys.forEach((monkey) => {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class= "display-card">
  <h1>${monkey.name}</h1>
  <img class= "display-img" src="${monkey.img}">
  <h3 class="text"> Species: ${monkey.species}</h3>
  <h3 class= "text"> Price: ${monkey.price}</h3>
  <h3 class="text"> Age: ${monkey.age}</h3>
  <h3 class="text"> Gender: ${monkey.gender}</h3>
  <h3 class="text"> Available: ${monkey.available}</h3>
  <h3 class="text"> Smart: ${monkey.smart}</h3>
  </div>`
  );
});

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

function original() {
  monkeys.forEach((monkey) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class= "display-card">
    <h1>${monkey.name}</h1>
    <img class= "display-img" src="${monkey.img}">
    <h3 class="text"> Species: ${monkey.species}</h3>
    <h3 class= "text"> Price: ${monkey.price}</h3>
    <h3 class="text"> Age: ${monkey.age}</h3>
    <h3 class="text"> Gender: ${monkey.gender}</h3>
    <h3 class="text"> Available: ${monkey.available}</h3>
    <h3 class="text"> Smart: ${monkey.smart}</h3>
    </div>`
    );
  });
}
document.querySelector(".original").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  original();
});

function male() {
  monkeys
    .filter((monkey) => monkey.gender === "male")
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
    <h1>${monkey.name}</h1>
    <img class= "display-img" src="${monkey.img}">
    <h3 class="text"> Species: ${monkey.species}</h3>
    <h3 class= "text"> Price: ${monkey.price}</h3>
    <h3 class="text"> Age: ${monkey.age}</h3>
    <h3 class="text"> Gender: ${monkey.gender}</h3>
    <h3 class="text"> Available: ${monkey.available}</h3>
    <h3 class="text"> Smart: ${monkey.smart}</h3>
    </div>`
      );
    });
}
document.querySelector(".male").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  male();
});

function female() {
  monkeys
    .filter((monkey) => monkey.gender === "female")
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
        <h1>${monkey.name}</h1>
        <img class= "display-img" src="${monkey.img}">
        <h3 class="text"> Species: ${monkey.species}</h3>
        <h3 class= "text"> Price: ${monkey.price}</h3>
        <h3 class="text"> Age: ${monkey.age}</h3>
        <h3 class="text"> Gender: ${monkey.gender}</h3>
        <h3 class="text"> Available: ${monkey.available}</h3>
        <h3 class="text"> Smart: ${monkey.smart}</h3>
        </div>`
      );
    });
}
document.querySelector(".female").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  female();
});

function age() {
  monkeys
    .filter((monkey) => monkey.age > "15")
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
        <h1>${monkey.name}</h1>
        <img class= "display-img" src="${monkey.img}">
        <h3 class="text"> Species: ${monkey.species}</h3>
        <h3 class= "text"> Price: ${monkey.price}</h3>
        <h3 class="text"> Age: ${monkey.age}</h3>
        <h3 class="text"> Gender: ${monkey.gender}</h3>
        <h3 class="text"> Available: ${monkey.available}</h3>
        <h3 class="text"> Smart: ${monkey.smart}</h3>
        </div>`
      );
    });
}
document.querySelector(".age").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  age();
});

function expensive() {
  monkeys
    .filter((monkey) => monkey.price > "$1000")
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
        <h1>${monkey.name}</h1>
        <img class= "display-img" src="${monkey.img}">
        <h3 class="text"> Species: ${monkey.species}</h3>
        <h3 class= "text"> Price: ${monkey.price}</h3>
        <h3 class="text"> Age: ${monkey.age}</h3>
        <h3 class="text"> Gender: ${monkey.gender}</h3>
        <h3 class="text"> Available: ${monkey.available}</h3>
        <h3 class="text"> Smart: ${monkey.smart}</h3>
        </div>`
      );
    });
}
document.querySelector(".expensive").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  expensive();
});

function available() {
  monkeys
    .filter((monkey) => monkey.available === true)
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
        <h1>${monkey.name}</h1>
        <img class= "display-img" src="${monkey.img}">
        <h3 class="text"> Species: ${monkey.species}</h3>
        <h3 class= "text"> Price: ${monkey.price}</h3>
        <h3 class="text"> Age: ${monkey.age}</h3>
        <h3 class="text"> Gender: ${monkey.gender}</h3>
        <h3 class="text"> Available: ${monkey.available}</h3>
        <h3 class="text"> Smart: ${monkey.smart}</h3>
        </div>`
      );
    });
}
document.querySelector(".available").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  available();
});

function smart() {
  monkeys
    .filter((monkey) => monkey.smart === "yes" || monkey.smart === "sorta")
    .forEach((monkey) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class= "display-card">
        <h1>${monkey.name}</h1>
        <img class= "display-img" src="${monkey.img}">
        <h3 class="text"> Species: ${monkey.species}</h3>
        <h3 class= "text"> Price: ${monkey.price}</h3>
        <h3 class="text"> Age: ${monkey.age}</h3>
        <h3 class="text"> Gender: ${monkey.gender}</h3>
        <h3 class="text"> Available: ${monkey.available}</h3>
        <h3 class="text"> Smart: ${monkey.smart}</h3>
        </div>`
      );
    });
}
document.querySelector(".smart").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  smart();
});
