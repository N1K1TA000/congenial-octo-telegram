"use strict"; 

import { greet, add, multiply, sumAll } from "./utils.js";
import { user, additionalSkills } from "./data.js";

const { name, age, city, skills } = user;

const allSkills = [...skills, ...additionalSkills];

const greetingMessage = greet(name);
const userInfo = `Користувач: ${name}, Вік: ${age}, Місто: ${city}.`;
const userSkills = `Навички: ${allSkills.join(", ")}`;

const sumResult = sumAll(10, 20, 30, 40);
const mathResult = add(multiply(10, 5), 15);

console.log(greetingMessage);
console.log(userInfo);
console.log(userSkills);
console.log(`Сума чисел 10, 20, 30, 40: ${sumResult}`);
console.log(`Результат (10 * 5) + 15: ${mathResult}`);

const appContainer = document.getElementById("app");

appContainer.innerHTML = `
    <h2>Результати виконання:</h2>
    <p><strong>${greetingMessage}</strong></p>
    <ul>
        <li>${userInfo}</li>
        <li>${userSkills}</li>
    </ul>
    <p>Сума довільної кількості аргументів (10, 20, 30, 40): <strong>${sumResult}</strong></p>
    <p>Математичні операції ((10 * 5) + 15): <strong>${mathResult}</strong></p>
`;