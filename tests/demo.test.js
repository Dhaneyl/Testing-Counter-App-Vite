//para ponerle nombre a nuestras pruebas es bueno utilizar un callback 
//con la palabra clave describe
describe('Pruebas en <DemoComponent />', ()=>{
    test("Esta prueba no debe fallar", ()=>{

        // 1. Inicializacion
        const nombre = 'Dhanibel Reyes';
    
        //2. Estimulo
    
        const nombre2 = nombre.trim();
    
        //3. Observar el comportamiento esperado.
    
        expect(nombre).toBe(nombre2);
        //quiero que el nombre 1 sea igual al nombre 2
    });
});

