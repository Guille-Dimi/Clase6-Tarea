/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#siguiente-paso').onclick = function(event){
    const $cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value)
    borrarIntegrantes()
    if($cantidadIntegrantes > 0){
        crearInteraccionesIntegrante($cantidadIntegrantes)
        mostrarBotonCalculo()
    }
    else{
        ocultarBotonCalculo()
    }
    
    event.preventDefault()
}

function crearIntegrante(){

    const $div = document.createElement('div')
    $div.className = 'integrante'
    document.querySelector('#integrantes').appendChild($div)

    const $label = document.createElement('label')
    $label.textContent = 'Edad del integrante: '
    $div.appendChild($label)

    const $input = document.createElement('input')
    $input.type = 'number'
    $input.className = 'edades'
    $div.appendChild($input)

}

function crearInteraccionesIntegrante(interacciones){
    for(let i = 0; i < interacciones; i++){
        crearIntegrante()
    }
}

function obtenerEdades(){
    const $edades = document.querySelectorAll('.edades')
    const edades = []
    for(let i = 0; i < $edades.length; i++){
        edades.push(Number($edades[i].value))
    }
    return edades
}

function calcularNumMayor(array){
    let numMayor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > numMayor){
            numMayor = array[i]
        }
    }
    return numMayor
}

function calcularNumMenor(array){
    let numMenor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < numMenor){
            numMenor = array[i]
        }
    }
    return numMenor
}

function calcularPromedio(array){
    let sumaNum = 0
    for(let i = 0; i < array.length; i++){
        sumaNum += array[i]
    }
    return (sumaNum / array.length).toFixed(2)
}

function mostrarResultados(){
    document.querySelector('#analisis').className = ''
}

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = ''
}

function ocultarResultados(){
    document.querySelector('#analisis').className = 'oculto'
}

function ocultarBotonCalculo(){
    document.querySelector('#calcular').className = 'oculto'
}


