function agregarParrafo() {

    const nuevoParrafo = document.createElement('p')

    nuevoParrafo.textContent = 'Acabas de darle click al botón.'

    document.getElementById('contenedor').appendChild(nuevoParrafo)
    
}