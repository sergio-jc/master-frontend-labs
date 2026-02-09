import styles from "./index.module.css";
import env from "./env.ts";

console.log("Hello from index.ts");

// ENV variable
const envVariable = env.envVariable
console.log("Environment variable:", envVariable);

// Simulating a TS error to check the type checking in Vite
// let hello = 'Hello world';
// hello = 213

// Creating an element to check the CSS module
const header1 = document.createElement("h1");
header1.textContent = "Hello Lemoncode Lab !";
header1.className = styles["header-title"] ?? "";

document.body.appendChild(header1);
