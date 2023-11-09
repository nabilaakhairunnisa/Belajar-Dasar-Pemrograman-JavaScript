const coffeeStock = require('./state');
console.log(coffeeStock);

//...

// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 10);
// console.log(isCoffeeMachineReady);
// console.log(coffeeStock);

//...

// import coffeeStock from './state.js';
 
// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }
 
// displayStock(coffeeStock);

//...

// import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
// console.log(stock);
// console.log(isCoffeeMachineReady);