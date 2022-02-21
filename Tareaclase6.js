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
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes')
    borrarIntegrantes()
    if(!validarCantidadIntegrantes(Number($cantidadIntegrantes.value))){
        crearInteraccionesIntegrante(Number($cantidadIntegrantes.value))
        mostrarBotonCalculo()
        $cantidadIntegrantes.className = ''
    }
    else{
        mostrarError(validarCantidadIntegrantes(Number($cantidadIntegrantes.value)))
        $cantidadIntegrantes.className = 'error'
    }
    
    event.preventDefault()
}

function mostrarError(error){
    const $textoError = document.createElement('li')
    $textoError.className = 'texto-error'
    $textoError.innerText = error
    document.querySelector('#errores').appendChild($textoError)
}

function validarCantidadIntegrantes(integrantes){
    if(!/^[0-9]+$/.test(integrantes)){
        return 'Debe ingresar una cantidad de solo numeros'
    }
    if(integrantes <= 0){
        return 'Debe ingresar una cantidad de integrantes mayor a 0'
    }
    if(integrantes > 20){
        return'Debe ingresar una cantidad de integrantes menor que 20'
    }
    return ''
}

function validarEdades(edad){
    if(!/^[0-9]+$/.test(edad)){
        return 'Debe ingresar una edad entera'
    }
    if(edad > 110){
        return 'Debe ingresar una edad menor a 110'
    }
    if(edad <= 0){
        return 'Debe ingresar una edad mayor a 0'
    }
    return ''
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

function borrarIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante')
    for(let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove()
    }
}

function borrarEdades(){
    document.querySelector('#mayor-edad').innerText = 'La edad mayor es: '
    document.querySelector('#menor-edad').innerText = 'La menor edad es: '
    document.querySelector('#promedio-edad'). innerText = 'El promedio de edad es: '
}

document.querySelector('#calcular').onclick = function(event){
    mostrarResultados()
    document.querySelector('#mayor-edad').innerText += calcularNumMayor(obtenerEdades())
    document.querySelector('#menor-edad').innerText += calcularNumMenor(obtenerEdades())
    document.querySelector('#promedio-edad').innerText += calcularPromedio(obtenerEdades())

    event.preventDefault()
}

function resetear(){
    ocultarResultados()
    ocultarBotonCalculo()
    borrarIntegrantes()
    borrarEdades()
}

document.querySelector('#resetear').onclick = resetear
