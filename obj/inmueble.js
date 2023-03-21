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


