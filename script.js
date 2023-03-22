// atributos inmueble

let direccion = "direccion";
let mCuadrados = 100;
let refCatastral = "refCatastral";
let precioBase = 240000;
let estado = "nuevo";
let coordenadas = [4.3333, 2.11111];
let antiguedad = 11;

// atributos piso

let planta = 4;
let nHabitaciones = 3;
let nLavabos = 1;
let tieneAscensor = true;
let mCuadradosTerraza = 30;

// test de pruebas

var inmueble1 = new Inmueble(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad);

console.log(inmueble1); // funciona meter la funcion al atributo precio.

var pisito1 = new Piso(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad, planta, nHabitaciones, nLavabos, tieneAscensor, mCuadradosTerraza);

console.log(pisito1); // //
