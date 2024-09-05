import plus from "./plus.js";
import "./styles.css";
// const style = require("./styles.css")
import android from "./android.png";
// import butWoman from "./a.jpg";

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.innerHTML = `<img src=${butWoman}>`;
// });

let env;
if (process.env.NODE_ENV === "development") {
  env = dev;
} else {
  env = pro;
}
console.log(process.env.NODE_ENV);
console.log(env);

function minus(a, b) {
  return a - b;
}
