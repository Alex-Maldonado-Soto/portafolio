///////codigo del navbar para mobile
const navBar = document.getElementById('navbar');

function navbar() {
  gsap.to("#navbar", {
    duration: 0.5,
    left: 0,
  });
  document.querySelector("#div").style.backgroundColor = "rgb(32 32 32 / 67%)";
   navBar.classList.add('navbar--show');
}

function navbarReverse() {
  gsap.to("#navbar", {
    duration: 0.5,
    left: -800,
  });
  document.querySelector("#div").style.backgroundColor = "transparent";
  navBar.classList.remove('navbar--show');
}


