import { usContext } from "../../src/base-pruebas/base-pruebas/06-deses-obj"


describe('Prueba 06-deses-obj', () => { 
    test('should return a object', () => { 
        const person = {
            clave: 'holaaa', 
            edad: 24
        }
       
        const user = usContext();
        console.log (usContext(person));

        expect(user).toEqual({
            clave: 'holaaa', 
            edad: 24
        })
    })
 })