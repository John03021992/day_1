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

var fourResult = document.querySelector(".four-result");
var encrypt = document.querySelector("#encrypt");
encrypt.addEventListener("click", function () {
  var userInput = document.querySelector(".user-input").value;
  var result = [];
  const alphabetMin = "abcdefghijklmnopqrstuvwxyz";
  const alphabetMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pos = -1;
  for (let i = 0; i < userInput.length; i++) {
    if (alphabetMin.indexOf(userInput[i]) >= 0) {
      pos = alphabetMin.indexOf(userInput[i]);
      result.push(alphabetMaj[pos]);
    } else if (alphabetMaj.indexOf(userInput[i]) >= 0) {
      pos = alphabetMaj.indexOf(userInput[i]);
      result.push(alphabetMin[pos]);
    }
  }
  result = result.toString().replace(/,/g, "");
  fourResult.innerHTML = `<p>${result}</p>`;
});

// Section 5

var generate = document.querySelector("#generate");
var fiveResult = document.querySelector(".five-result");
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
generate.addEventListener("click", function () {
  password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  fiveResult.innerHTML = `<p>${password}</p>`;
});
