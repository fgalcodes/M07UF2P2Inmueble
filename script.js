var inmueble = new Inmueble();
var piso = new Piso();

// console.log(inmueble);
// console.log(piso);

piso.direccion = "casa aigua itb";

// console.log(piso);


var inmuebles = new Cerebro();

inmuebles.altaVivienda(piso);
inmuebles.altaVivienda(inmueble);

// console.log(inmuebles);

const formAgregar = document.getElementById("buscador-inmueble");
formAgregar.addEventListener("submit", (e) => {
    e.preventDefault();
    var nuevoInmueble = new Piso();
    nuevoInmueble.direccion = document.getElementById("direccion-inmueble").value

    console.log(inmuebles.inmuebles[0]);
});
