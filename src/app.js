import plus from "./plus.js";
import "./styles.css";
// const style = require("./styles.css")
import android from "./android.png";
import butWoman from "./a.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src=${butWoman}>`;
});

console.log(plus(1, 2));
function minus(a, b) {
  return a - b;
}
