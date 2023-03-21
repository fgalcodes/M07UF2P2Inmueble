class Inmueble {
    direccion;
    mCuadrados;
    refCatastral;
    precioBase;
    foto;
    estado;
    coordenadas;
    anyos;

    constructor() {
        this.direccion = "";
        this.mCuadrados = 0;
        this.refCatastral = "";
        this.precioBase = 0;
        this.estado = "";
        this.coordenadas = [];
        this.anyos = 0;       
    }
}

class Piso extends Inmueble {
    planta;
    portal;
    terraza;

    constructor() {
        super();
        this.planta = 0;
        this.portal = "";
        this.terraza = false;

    }
}

class Casa{
    nParedesColin;
    unifamiliar;
    nBanyos;
    nHabitaciones

    extras = new Map();
    jardin;
    tamanyoJardin;
    piscina;
}

class Local{

    nVentanas;
    persianaMetalica;

    constructor(vent,pers){
        this.nVentanas = vent;
        this.persianaMetalica = pers;
    }

    variaPrecioLocal(){

    }

}

class Restauracion extends Local
{
    equipacion = new Map();

    constructor(vent,pers,extract,cafet,mobili){
        super(vent,pers);
        this.equipacion.set("Extractor",extract);
        this.equipacion.set("Cafetera",cafet);
        this.equipacion.set("Mobiliario",mobili);
    }
}

class Industrial extends Local {

    tipoSuelo;
    persianaMetalica;

    constructor(vent,pers,tipSuel,persMetal){
        super(vent,pers);
        this.tipoSuelo = tipSuel;
        this.persianaMetalica = persMetal;
    }

    cobroImpuestos(){

    }
}

class Comercio extends Local{

    accesible;

    constructor(vent,pers,accs){
        super(vent, pers);
        this.accesible = accs;
    }
    
}


