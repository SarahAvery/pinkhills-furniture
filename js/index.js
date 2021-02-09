//Reset
import "../resources/css/css-reset.css";

//Global
import "../resources/sass/main";

console.log("hi");

const mediaQuery600 = window.matchMedia("(max-width: 600px)");
console.log("working");

if (mediaQuery600.matches) {
  const rightColor = document.getElementById("right-color");
  const rightInfo = document.getElementById("right-info");

  rightInfo.after(rightColor);
}
