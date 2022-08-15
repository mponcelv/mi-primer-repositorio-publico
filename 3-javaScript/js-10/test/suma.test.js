const suma = require('../src/js/suma');

// pedir un valor esperado 
//comparrar un resultado


test('sumar 1 + 2 debe ser 3', () => {
    expect(suma (1,4)).toBe(3);
});


test('1 + 4 no debe ser 0', () => {
    expect( suma(1, 4)).not.toBe(0);
});