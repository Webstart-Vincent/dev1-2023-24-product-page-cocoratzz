// Déclarer/ initialiser une constante
const color = "red";

const colors = ["pink", "green", "color"];

const index = 1;

// 'green'
const myColor = color[index];

// undefined
const value = color[10];

// Concatenation
const emplasis1 = "My car is" + colors[1] + "and it is beautiful!";

// Interpolation
const emphasis2 = `My car is ${colors[1]} and it is very very very beautiful`;

// initialisation de l'objet
const car = {
    // priorité : valeur attaché à un objet
    color: "red",
    // priorité valeur attaché à un objet
    fuel: "electric",

    // methode : fonction attaché à un objet
    start() {
        console.log("Vrooom");
    },
};

const myPropety = "color";

// appel de la methode start()
car.start();
car["start"]();
const emplasis3 = `My car is ${car.color}`;
const emphasis4 = `My car is ${car["color"]}`;
const emphasis5 = `My car is ${car[myPropety]}`;
