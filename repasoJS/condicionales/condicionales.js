// ### **Ejercicio 1: Acceder a un valor específico**
// #### Enunciado
// Queremos acceder al nombre del director de la película.


// Objetivo: acceder al director de la película
/*

const starWarsInfo = {
    movie: {
      title: "A New Hope",
      release_year: 1977,
      director: "George Lucas",
      characters: {
        main: {
          name: "Luke Skywalker",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
        },
        villain: {
          name: "Darth Vader",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Emperor Palpatine"],
        },
      },
    },
  };


function nombreDirector(data) {
    const director = data.movie.director;
console.log (director)
}

director (starWarsInfo);
*/


//### **Ejercicio 5: Cambiar la especie de Darth Vader a "Sith" si su nombre es "Anakin Skywalker"**
//#### Enunciado
//Queremos cambiar la especie de Darth Vader a "Sith", pero solo si su nombre es "Anakin Skywalker".


const starWarsInfo = {
    movie: {
      title: "A New Hope",
      release_year: 1977,
      director: "George Lucas",
      characters: {
        main: {
          name: "Luke Skywalker",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
        },
        villain: {
          name: "Darth Vader",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Emperor Palpatine"],
        },
      },
    },
  };


  // Objetivo: cambiar la especie de Darth Vader a Sith si su nombre es Anakin Skywalker.
  // Paso 1: acceder a `movie.characters.villain
  // Paso 2: comprobar que la especie es Anakin Skywalker
  // Paso 3: cambiar el nombre de la especie a "Sith" si su nombre es Anakin Skywalker

  function cambiarEspecie(data) {
    const especie = data.movie.characters.villain;

    if (especie.species === "Anakin Skywalker") {
        especie.species = "Sith";
    }
    
  }

  cambiarEspecie(starWarsInfo);
  console.log(starWarsInfo.movie.characters.villain.species);
  

 /* Ejercicio 6: Cambiar el estatus de Darth Vader y añadir un nuevo aliado a Luke Skywalker
Enunciado
Usando el JSON starWarsInfo proporcionado, realiza las siguientes modificaciones si se cumplen las condiciones descritas:
Cambia la especie de Darth Vader a "Sith Lord" y añade "Boba Fett" a su lista de aliados, pero solo si su nombre es "Darth Vader" y su planeta de origen (homeworld) es "Tatooine".
Si la lista de aliados de Luke Skywalker contiene a "Obi-Wan Kenobi", añade también a "Yoda" como su aliado.
Verifica si el director de la película es "George Lucas" y, si es así, añade una nueva propiedad producer con el valor "Lucasfilm" en el nivel de la película.
Bonus: Si el año de lanzamiento (release_year) es anterior a 1980, cambia el título (title) de la película a "Star Wars: Episode IV - A New Hope" */

// Objetivo: cambiar la especie de darth vader a sith lord y añadir boba fett a sus aliados si el nombre es darth vader y el planeta de origen tatooine.
// añadir yoda a la lista de aliados de luke sky walker si tiene obi wan kenobi.
// si el director de la pelicula es george lucas añadimos una nueva propiedad: producer, con el valor "lucasfilm" en movie.
// bonus: si el año de lanzamiento es anterior a 1980, cambiar el titulo de la pelicual a "Star Wars: Episode IV - A New Hope".

function name(params) {
  
}