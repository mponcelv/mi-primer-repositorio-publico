const palindromos = require('./js/palindromo.js');
describe('pruebas de la funcion palindromo', () => {
    test('debe regresar "es un palindromo" si regresamos ojo', () => {
        let mensaje = 'es un palindromo';
        let palabra = 'ojo';
        expect( palindromo(palabra) ).toBe(mensaje);
    })
    test('al ingresar un numero debe regresar al mensaje ', () => {
        let mensaje = 'no es una palabra';
        let valor =
    })
})


test('debe de regresas "no es un palindromo"', () => {
    let mensaje = 'no es un palindromo';
    let palabra = 'generation';
})