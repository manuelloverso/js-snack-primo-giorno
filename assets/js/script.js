const number = 100; //number
console.log(number);

// non posso dichiare pi const perchè altrimenti non sarebbe modificabile in seguito
let pi = 3.14; //number
console.log(pi);

// avendo dichiarato la variabile let e non const posso cambiarle il valore

pi = 3.1416; //number
console.log(pi);

const radius = 8; //number
const circle = radius * pi * 2; //number
console.log(circle);

let userName = "Carlo"; //string
userName = "Marco"; //string
console.log(userName);

//temperature
let temperature = 22.5;
console.log(temperature);

temperature = temperature + 5;
console.log(temperature);
