// EJERCICIO 1

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
/*console.log(z)*/


// EJERCICIOS 2

/*


1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

const character = {name: 'Jack Sparrow', age: "10"};
delete character.age;
character.age = 25
console.log(character);  { name: 'Jack Sparrow', age: 25 } */

/*let firstName = "Jon";
let lastName = "Snow";
let age = 24;
let frase = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
console.log (frase);    Soy Jon Snow, tengo 24 años y me gustan los lobos.

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let precios = [19, 29];
let totalPrecios = precios.reduce(
    function (acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0
    )
console.log(totalPrecios);  48 */
/*
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
console.log (globalBasePrice);  //--- 25000
let precioFinal1 = car1.basePrice + globalBasePrice;
console.log (precioFinal1);  //--- 75000
let precioFinal2 = car2.basePrice + globalBasePrice;
console.log (precioFinal2);  // 95000  */


/* // EJERCICIO 3
/* 
let b = h * y;
/*console.log(b)  --- 50 */  
let f = y / 2;
/*console.log(f)   --- 5 */
let d = 15 % 9;
/*console.log(d)  --- 6 */
let p = 10;
let j = 5;
let o = 10 + 5;
/*console.log(o)   --- 15*/
let c = 10;
let m = 5;
let i = c * m;
/*console.log(i)   --- 50*/


/// EJERCICIO 4

/* const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
const menosAvengers = avengers.shift();
console.log(avengers);
console.log(menosAvengers);  --- "HULK" */ 

/* const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
console.log (avengers.unshift("IRONMAN"));  --- 4
console.log(avengers);  --- [ 'IRONMAN', 'HULK', 'SPIDERMAN', 'BLACK PANTHER' ] */

/* const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
console.log (avengers.unshift());  --- 3 */

/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);  --- [ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ]
console.log (rickAndMortyCharacters.pop());  --- Summer */

/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const ultimoRickAndMortyCharacters = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);  --- [ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ] 
console.log(rickAndMortyCharacters.shift());  --- Rick
console.log(rickAndMortyCharacters.pop());  --- Summer */

/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const MenosRickAndMortyCharacters = rickAndMortyCharacters.splice(1,1,);
console.log(rickAndMortyCharacters);  --- [ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ]*/


// EJERCICIO 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == '2') {
    console.log
}

if (number1 !== number2) {
    console.log
}

if (number3 != number1) {
    console.log
}

if (number3 * 5 == number1) {
    console.log
}

if ((number3 * 5 == number1), (number1 * 2 == number2)) {
    console.log
}

if ((number2 / 2 == number1), (number1 / 5 == number3)) {
    console.log
}