import { getHeroeByIdAsync } from '../../src/base-pruebas/base-pruebas/09-promesas';


describe('Prueba en 09-promesas', () => { 

    //con then

    test('getHeroesByIdAsync should a heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero =>{

            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            );

            done();
        });
     });

     //con reject

     test('getHeroesByIdAsync should return an error if the id given does not exist', 
     (done) => { 

        const id = 100;
        getHeroeByIdAsync( id )
        .catch(error =>{
            
         expect( error ).toBe(`No se pudo encontrar el héroe${id}`);
        // console.log(error);

            done();
        })
      })  
});