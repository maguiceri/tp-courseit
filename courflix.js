const menuButton = document.querySelector(".js-burger");
const nav = document.querySelector(".js-nav");

menuButton.onclick = toggleMenu;

menuButton.onclick = function(e) {
  e.stopPropagation();
  toggleMenu()
}

nav.onclick = function (e) {
  e.stopPropagation();
}
 
document.body.onclick = function () {
  nav.classList.remove("open");
}

function toggleMenu() {
  console.log("click");
  if(nav.classList.contains("open")) {
    nav.classList.remove("open");
  }else{
    nav.classList.add("open");
  }
}

