//// JS BASIC ALGORITHMS

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


//* EJERCICIO 6: BUCLES
1.1 
for (let i=0; i<=9; i++) {
    console.log (i);  //! RESULTADO: 0 1 2 3 4 5 6 7 8 9 
} 

1.2  
for (let i=0; i<=9; i++) {
    
        if (i %2 == 0) {
            console.log (i)    //! RESULTADO : 0 2 4 6 8
    }
}

1.3
    let contandoOvejitas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    for (let i = 0; i < contandoOvejitas.length; i++) {
        if (contandoOvejitas[i] <= 9) {
            console.log(i, 'Intentando dormir 🐑');
        } else {
            console.log(i, 'Dormido!');     //! RESULTADO: 0 Intentando dormir � 1 Intentando dormir � 2 Intentando dormir � 3 Intentando dormir � 4 Intentando dormir � 
        }                                   //! 5 Intentando dormir � 6 Intentando dormir � 7 Intentando dormir � 8 Intentando dormir � 9 Dormido!
    }



//// JS FUNCTIONS

//* EJERCICIO 1: BUSCAR EL MÁXIMO
// PRIMERA OPCIÓN
function sum ( numberOne, numberTwo) {
    return `El número mayor es el ${Math.max (1,2)}`;   
}
console.log (sum (1,2));   //! RESULTADO: El número mayor es el 2  

// SEGUNDA OPCIÓN
function sum (a , b) {
if (a > b) {
    return console.log (a)
    }else{
    return console.log (b)
 }
};
sum (5,10);  //! RESULTADO: 5


//* EJERCICIO 2: BUSCAR LA PALABRA MÁS LARGA
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord (e) {
    return e.reduce ((acumulador, valorActual) => {
        return valorActual.length > acumulador.length ? valorActual : acumulador;
    }, "");    
}
console.log (findLongestWord (avengers));  //! RESULTADO: Captain A.


//* EJERCICIO 3: CALCULAR LA SUMA
const numbers = [1, 2, 3, 5, 45, 37, 58];
let totalNumbers = numbers.reduce(
    function (acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0 
)
console.log(totalNumbers); //! RESULTADO: 151


//* EJERCICIO 4: CALCULAR EL PROMEDIO
const numbers = [12, 21, 38, 5, 45, 37, 6];
let totalNumbers = numbers.reduce(
        function (acumulador, valorActual) {
            return acumulador + valorActual;
        }, 0   
    )
console.log (totalNumbers);              //! RESULTADO: 164

let promedio = totalNumbers /7; 
console.log (promedio);                  //! RESULTADO: 23.428571428571427     
console.log (promedio.toFixed ())        //! RESULTADO: 23 


//* EJERCICIO 5: CALCULAR PROMEDIO DE STRINGS

const mix = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumaMix (array) {
    const total = array.reduce ((acc, actual) => {
        if (typeof actual == "number") {
           return acc + actual;
        } else if (typeof actual == "string") {
            return acc + actual.length;
        } else {
            return acc;
        }
     }, 0);
     return total;
    }   
        
console.log ("SUMA MIX", sumaMix (mix));   //! RESULTADO: SUMA MIX 41


//* EJERCICIO 6: VALORES ÚNICOS  

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
const comidasSinRepetir = duplicates.reduce(      
    (acumulador, valorActual)=>{
        if (!acumulador.includes(valorActual)){
            acumulador.push (valorActual);
        }
        return acumulador;
    }, []
)
console.log (comidasSinRepetir);   //! RESULTADO: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']


//* EJERCICIO 7: 
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
//en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName (e, name) {
    for (let i = 0; i < e.length; i++) {
        if (e[i] === name) {
            return { inArray: true, position: i};
            }
        }      
    return { inArray: false}
}

console.log (finderName (nameFinder, "Uma"));  //! RESULTADO: { inArray: false }
console.log (finderName (nameFinder, "Marc"));  //! RESULTADO: { inArray: true, position: 10 }
*/

//* EJERCICIO 8:

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
//Puedes usar este array para probar tu función:


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(e) {
    const contador = {};
        e.forEach (palabra => {
            contador [palabra] = (contador [palabra] || 0) + 1;
        });
    return contador;
}

console.log (repeatCounter(counterWords));  //! RESULTADO: { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }


