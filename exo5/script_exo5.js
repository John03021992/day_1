// Section 1

const prenom = "Jonathan";
const nom = "Juillerat";
const result = document.getElementById("prenom");
const result2 = document.getElementById("nom");

window.addEventListener("load", function () {
  result.innerHTML = "Mon prénom est : " + prenom;
  result2.innerHTML = "Mon nom est : " + nom;
});

// Section 2

const square = document.getElementById("square");

square.addEventListener("click", function () {
  square.style.cssText = "border-radius: 100px; background: #DE3163";
});

// Section 3

const films = ["film1", "film2", "film3", "film4", "film5"];
let currentFilm = "";
const dede = document.querySelector(".round");
const dedeResult = document.querySelector(".dede-result");
dede.addEventListener("click", function () {
  let random = Math.floor(Math.random() * films.length);
  if (random == currentFilm && random < films.length - 1) {
    random += 1;
  } else if (random == currentFilm && random == films.length - 1) {
    random -= 1;
  }
  currentFilm = random;
  dedeResult.innerHTML = `<p>${films[random]}</p>`;
});

// Section 4

// Section 5
