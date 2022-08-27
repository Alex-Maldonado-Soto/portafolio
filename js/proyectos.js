const portafolio = document.querySelector("#proyectos");
const div = document.createElement("div");
const JavaScript = document.getElementsByClassName(`JavaScript`);
const HTML = document.getElementsByClassName(`HTML`);
const CSS = document.getElementsByClassName(`CSS`);
let url_repo = "https://api.github.com/users/Alex-Maldonado-Soto/repos";
let repositorios = 9;
var repositorio;

///lo que hace es agarrar datos de github colocarlos en una variable y llenar cada card de forma diferente segun indique el array
for (let i = 0; i < repositorios; i++) {
  fetch(url_repo) ///agarra los datos de la url de github
    .then((respuesta) => respuesta.json()) // convierte los datos en json
    .then((data) => {
      ///coloca los datos en una variable llamada data (no se puede agarrar fuera de la funcion)
      repositorio = data; //coloca los valores de data en otra variable que sea accecible desde la consola para facilitar ciertas cosas

      ///Lo que hace es crear div (solo eso)
      for (let i = 0; i < repositorio.length; i++) {
        portafolio.append(document.createElement("div"));
      }

      ///Lo que hace es seleccionar los div que cree antes
      let divProyectos = [
        ...document.querySelectorAll(".portafolio__proyectos div"),
      ];

      divProyectos[i].classList.add("cardProyecto"); //anade una clase que indica el lenguaje que se utilizo

      divProyectos[
        i ///el codiigo de cada card
      ].innerHTML = `<h3> ${repositorio[i].name} </h3> <p> ${repositorio[i].description} </p><a href="${repositorio[i].html_url}" target="_blank">Ver repositorio </a> `;
    });
}
