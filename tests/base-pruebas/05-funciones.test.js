import { getUser, getUsuarioActivo } from '../../src/base-pruebas/base-pruebas/05-funciones';


describe('Prueba en 05-Funciones', () => { 

    test('getUser should return an object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
    const user = getUser();

    expect(user).toEqual(testUser);
    
    });

    test('getUsuarioActvivo should return a function too', () => { 
        const name = 'Dhanibel'
        const userActivo = getUsuarioActivo(name);
        console.log(userActivo);

        expect(userActivo).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
     })
})