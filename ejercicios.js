//* EJERCICIO 1: VARIABLES
/*
1.1
let myFavoriteHero = "Hulk";
1.2
let x = 50;

1.3
let h = 5;
let y = 10;

1.4
let z = h + y;
console.log (z) //! RESULTADO: 15


//* EJERCICIOS 2: VARIABLES AVANZADAS
1.1
const character = {name: 'Jack Sparrow', age: "10"};
delete character.age;
character.age = 25
console.log(character);  //! RESULTADO: { name: 'Jack Sparrow', age: 25 } */

1.2
/*let firstName = "Jon";
let lastName = "Snow";
let age = 24;
let frase = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
console.log (frase); //! RESULTADO: Soy Jon Snow, tengo 24 años y me gustan los lobos.

1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let precios = [19, 29];
let totalPrecios = precios.reduce(
    function (acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0
    )
console.log(totalPrecios); //! RESULTADO: 48 

1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
console.log (globalBasePrice);  //! RESULTADO: 25000
let precioFinal1 = car1.basePrice + globalBasePrice;
console.log (precioFinal1);  //! RESULTADO: 75000
let precioFinal2 = car2.basePrice + globalBasePrice;
console.log (precioFinal2);  //! RESULTADO: 95000


//* EJERCICIO 3: OPERADORES
1.1
let b = h * y;
console.log(b)  //! RESULTADO:  50   

1.2
let f = y / 2;
console.log(f)  //! RESULTADO: 5 

1.3
let d = 15 % 9;
console.log(d)  //! RESULTADO: 6 

1.4
let p = 10;
let j = 5;
let o = 10 + 5;
console.log(o)  //! RESULTADO: 15

1.5
let c = 10;
let m = 5;
let i = c * m;
console.log(i)  //! RESULTADO: 50 



//* EJERCICIO 4: ARRAYS
1.1
const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
const menosAvengers = avengers.shift();
console.log(avengers);
console.log(menosAvengers);  //! RESULTADO: "HULK" 

1.2
const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
console.log (avengers.unshift("IRONMAN"));  //! RESULTADO: 4
console.log(avengers);  //! RESULTADO: [ 'IRONMAN', 'HULK', 'SPIDERMAN', 'BLACK PANTHER' ]

1.3
const avengers = ["HULK", "SPIDERMAN","BLACK PANTHER"];
console.log (avengers.unshift());  //! RESULTADO: 3

1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);  //! RESULTADO: [ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ]
console.log (rickAndMortyCharacters.pop());  //! RESULTADO: Summer

1.5
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const ultimoRickAndMortyCharacters = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);  //! RESULTADO: [ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ] 
console.log(rickAndMortyCharacters.shift());  //! RESULTADO: Rick
console.log(rickAndMortyCharacters.pop());  //! RESULTADO: Summer

1.6
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const MenosRickAndMortyCharacters = rickAndMortyCharacters.splice(1,1,);
console.log(rickAndMortyCharacters);  //! RESULTADO: [ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ]




//* EJERCICIO 5: CONDICIONALES

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == 2) {
    console.log ("number2 dividido entre number1 es igual a 2");  //! RESULTADO: number2 dividido entre number1 es igual a 2
}

if (number1 !== number2) {
    console.log ("number1 es estrictamente distinto a number2");  //! RESULTADO: number1 es estrictamente distinto a number2
}

if (number3 != number1) {
    console.log ("number3 es distinto number1");  //! RESULTADO: number3 es distinto number1
}

if (number3 * 5 == number1) {
    console.log ("number3 por 5 es igual a number1");  //! RESULTADO: number3 por 5 es igual a number1
}

if ((number3 * 5 == number1), (number1 * 2 == number2)) {
    console.log ("number3 por 5 es igual a number1 y number1 por 2 es igual a number2");  //! RESULTADO: number3 por 5 es igual a number1 y number1 por 2 es igual a number2
}

if ((number2 / 2 == number1), (number1 / 5 == number3)) {
    console.log ("number2 entre 2 es igual a number1 y number1 entre 5 es igual a number3");  //! RESULTADO: number2 entre 2 es igual a number1 y number1 entre 5 es igual a number3
}

*/