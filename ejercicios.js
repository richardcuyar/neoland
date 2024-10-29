/* // Validad la longitud del array (¿¿si no tiene nos devuelve undefined)
// El método push () añade uno o más elementos al final de un array
// Nos devuelve la nueva longitud del array: los elementos totales
// El método cambia la longitud del array.

//1. Ver la longitud del array y si está vacío
//2. Añadimos los elementos nuevos al array
//3. Devolvemos el número de elementos nuevos
//4. Devolvemos el nuevo array con todos sus elementos

function pushArray(array) {
    if ... slice // para que nos devuelva el array

return array.lenght = NumberOfUnits  // para ver el número elementos
//Definimos una función llamada pushCustom que toma un array y múltiples elementos

function pushCuston (array, ...elementos) {

    //Inicia un bucle for para iterar sobre cada elemento recibido en "elementos"
    for (let index = 0; index < elementos.length; index++) {

        //Agrega el elemento actual al final del array.
        // "array.length" proporciona el índice en el cual se debe insertar el elemento actual

        array [array.length] = elementos [index];

        //Retorna la nueva longitud del array después de agregar todos los elementos
        return array.length;
        }
        }


        function accionDePersona (callback) 

        

function accionDePersona (callback){
    const nombre = "Richard"
    callback(nombre)    
}

function despedirse(nombre) {
    console.log (`Adios de parte de ${nombre}`)
    }


accionDePersona (despedirse)  // Adios de parte de Richard
                                

// 

function MayorDeEdad (nombre, edad, callback) {
    if (edad >= 18) {
        callback (true , nombre)
    } else {
        callback (false, nombre)
}
}

function confirmarMayorDeEdad (nombre) {
    console.log (`${nombre} es mayor de edad`)
}

function confirmarMenorDeEdad (nombre) {
    console.log (`${nombre} es menor de edad`)
}

MayorDeEdad ("Ana", 24, function (nombre, edad) {
    if(nombre) {
        confirmarMayorDeEdad (edad)
    } else {
        confirmarMenorDeEdad (edad)
    }
})

MayorDeEdad ("Juan", 16, function (nombre, edad) {
    if(nombre) {
        confirmarMayorDeEdad (edad)
    } else {
        confirmarMenorDeEdad (edad)
    }
})


// Tienes una matriz que representa las calificaciones de varios estudiantes en diferentes asignaturas. Debes calcular la suma de las calificaciones para cada estudiante
//  y almacenarlas en un nuevo array.

const matrizNotas = [
    [5,6,8],
    [7,5,6],
    [4,9,9]
]

let sumaPorEstudiante= []
for (let i=0; i< matrizNotas.length; i++) {
    let suma = 0;

for (let j=0; j < matrizNotas[i].length; j++){
    suma += matrizNotas [i][j];
}
    sumaPorEstudiante.push (suma);
}
        console.log ("Sumas por estudiante:", sumaPorEstudiante);
    

// REPASO CREAR UNA CALCULADORA

function multiplicar (num1, num2) {
    return num1 * num2
}

function sumar (num1, num2) {
    return num1 + num2
}

function restar (num1, num2) {
    return num1 - num2
}

function dividir (num1, num2) {
    return num1 / num2
}

const calculadora = {
    sumar: "sumar", 
    restar: "restar", 
    dividir: "dividir", 
    multiplicar: function multiplicar (){
        console.log (multiplicar)
    }
}

*/

// REPASO GESTION DE STOCK

const inventario = [
    { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
    { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
    { nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50 },
    { nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10 }
  ];

  // Función 1: Añadir un Producto


function agregarProducto (nombre, categoria, cantidad, precio) {
   const newProduct = {nombre, categoria, cantidad, precio}
    inventario.push (newProduct)  // también inventario.push ({nombre, categoria, cantidad, precio})
        console.log (`Se ha añadido el producto ${nombre}`)
}

// Función 2: Buscar un Producto

function buscarProducto (label, value) {
    const resultados = inventario.filter ((producto) => producto [label].toLowerCase === value.toLowerCase)
    return resultados    
}
console.log (buscarProducto ("nombre", "camisa"))
    


// Función 3: Actualizar Stock

function actualizarStock (nombre, cantidadCambio) {
    let actualizado = 
}
