function probarValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes('asd') === 'Debe ingresar una cantidad de solo numeros',
        'Validar cantidad integrantes no validó que la cantidad de integrantes sea de solo numeros'
    )
    console.assert(
        validarCantidadIntegrantes(0) === 'Debe ingresar una cantidad de integrantes mayor a 0',
        'Validar cantidad integrantes no validó que la cantidad de integrantes sea mayor a 0'
    )
    console.assert(
        validarCantidadIntegrantes(21) === 'Debe ingresar una cantidad de integrantes menor que 20',
        'Validar cantidad integrantes no validó que la cantidad de integrantes sea menor a 20'
    )
    console.assert(
        validarCantidadIntegrantes(4) === '',
        'Validar cantidad integrantes no validó correctamente una cantidad de integrantes valida'
    )
}
probarValidarCantidadIntegrantes()

function probarValidarEdades(){
    console.assert(
        validarEdades(',er') === 'Debe ingresar una edad de solo numeros',
        'Validar edades no validó que la cantidad de integrantes sea de solo numeros'
    )
    console.assert(
        validarEdades(111) === 'Debe ingresar una edad menor a 110',
        'Validar edades no validó que la cantidad de integrantes sea menor a 110'
    )
    console.assert(
        validarEdades(0) === 'Debe ingresar una edad mayor a 0',
        'Validar edades no validó que la cantidad de integrantes sea mayor a 0'
    )
    console.assert(
        validarEdades(25) === '',
        'Validar edades no validó correctamente una edad valida'
    )
}
probarValidarEdades()

