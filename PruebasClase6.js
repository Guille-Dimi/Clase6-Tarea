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
}
probarValidarCantidadIntegrantes()

