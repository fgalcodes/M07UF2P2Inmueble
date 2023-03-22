

function Main(){

    var inmueble = new Inmueble("caca",50,"gfd",5000,"nuevo",[2,1],45,false);
   // console.log(inmueble.calcularPrecioPrincipal());

    var piso = new Piso("caca",400,"gfdsga",7000,"nuevo",[43,53],50,false,5,3,5,2,true,true,50);
    var comercio = new Comercio("Caca",500,"hgfd",50000,"nuevo",[76,54],60,false,7,true,true);
    var restaurante = new Restauracion("caca",500,"hgf",53200,4,[4,3],54,false,5,true,false,true,true);

    var gestor = new Gestion();

    console.log(piso.precioBase);
    gestor.modificarInmueble(piso,"precioBase",10000);
    console.log(piso.precioBase);
    console.log("prueba");
    
}
