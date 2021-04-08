const menuButton = document.querySelector(".js-burger");
const nav = document.querySelector(".js-nav");

console.log(menuButton);
console.log(nav);


menuButton.onclick = function () {
  console.log("click");
  if(nav.classList.contains("open")) {
    nav.classList.remove("open");
  }else{
    nav.classList.add("open");
  }
}