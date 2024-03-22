"use strict";
// 45. Cars: Write a function that stores information about a car in a object. The function should always recieve a manufacturer and a 
// model name. It should then accept an arbitrary number of keyword arguments. Call the finction with the required information 
// and two other name-value pairs, such as a color or an optional feature. Print the object that's returned to make sure all the information 
// was stored correctly 
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = createCar("Rolls Royce", "Phantom", { color: "twilight purple", year: "2024" });
console.log(mycar);
