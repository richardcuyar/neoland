/* ### **Ejercicio 1: Formatear y verificar un nombre completo**

#### Enunciado:

Imagina que tienes dos variables, `firstName` y `lastName`, que contienen el nombre y apellido de una persona. Tu tarea es crear una función `formatName()` que haga lo siguiente:

1. Concatenar `firstName` y `lastName` en un solo string llamado `fullName`, usando **template literals**.
2. Convertir `fullName` a mayúsculas y guardarlo en una nueva variable `upperName`.
3. Verificar si el string `upperName` contiene la palabra "SKYWALKER".
4. Si `upperName` contiene "SKYWALKER", imprimir `"¡Es un Skywalker!"`.
5. Si no contiene "SKYWALKER", imprimir `"No es un Skywalker"`.*/

let firstName = "ricardo"
let lastName = "ruiz"

function formatName (firstName, lastName) {
let fullname = `${firstName}${lastName}`
let uppername = fullname.toUpperCase ();

if (uppername.includes ("SKYWALKER")) {
    console.log ("Es un Skywalker")
    } else {
        console.log ("No es un Skywalker")
    }
}

formatName ("Luke", "Skywalker");
formatName ("Anakin", "Vader");

