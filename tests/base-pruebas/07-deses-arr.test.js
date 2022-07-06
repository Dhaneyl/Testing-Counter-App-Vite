import { retornaArreglo } from '../../src/base-pruebas/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => { 

    test('should return an string and a number ', () => {
        const [letters, number] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(number).toBe(123);

       //para exigir el tipo de datos que se quiere que se ingrese
        expect(typeof letters).toBe('string');
        expect(typeof number).toBe('number');

 });

});