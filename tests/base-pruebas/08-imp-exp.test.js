import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/base-pruebas/08-imp-exp';


describe('Prueba 08-imp-exp', () => { 

    test('getHeroById should return a hero per Id', () => {

    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })
     
     //another one
     test('should return undefine if there is a wrong id', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toBeFalsy();
      })

      //heroes de dc
      test('getHeroesByOwner should return an array with 3 object of heroes', () => { 

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        console.log(hero);

        expect(hero).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
      })

      //Marvel's heroes
      test('getHeroesByOwner should return a array with 2 object of heroes', () => { 
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        console.log(hero);

        expect(hero).toEqual(  [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
      })

 })