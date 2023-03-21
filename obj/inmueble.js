class Inmueble {
    direccion;
    mCuadrados;
    refCatastral;
    precioBase;
    foto;
    estado;
    coordenadas;
    anyos;

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos) {
        this.direccion = direccion;
        this.mCuadrados = mCuadrados;
        this.refCatastral = refCatastral;
        this.precioBase = precioBase;
        this.foto = foto;
        this.estado = estado;
        this.coordenadas = coordenadas;
        this.anyos = anyos;
    }
}

class Piso extends Inmueble {

    plantaPuerta
    terraza;

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, plantaPuerta, terraza) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos);
        this.plantaPuerta = plantaPuerta;
        this.terraza = terraza;

    }
}

class Casa extends Inmueble {
    nParedesColin;
    unifamiliar;
    nBanyos;
    nHabitaciones

    extras = new Map();

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, jardin, tamanyoJardin, piscina) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos);
        this.extras.set("Jardin", jardin);
        this.extras.set("MetrosJardin", tamanyoJardin);
        this.extras.set("Piscina", piscina);
    }
}

class Local extends Inmueble {

    nVentanas;
    persianaMetalica;

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos);
        this.nVentanas = vent;
        this.persianaMetalica = pers;
    }

    variaPrecioLocal() {

    }

}

class Restauracion extends Local {
    equipacion = new Map();

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers, vent, pers, extract, cafet, mobili) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers);
        this.equipacion.set("Extractor", extract);
        this.equipacion.set("Cafetera", cafet);
        this.equipacion.set("Mobiliario", mobili);
    }
}

class Industrial extends Local {

    tipoSuelo;
    persianaMetalica;

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers, tipSuel, persMetal) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers);
        this.tipoSuelo = tipSuel;
        this.persianaMetalica = persMetal;
    }

    cobroImpuestos() {

    }
}

class Comercio extends Local {

    accesible;

    constructor(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos,vent, pers, accs) {
        super(direccion, mCuadrados, refCatastral, precioBase, foto, estado, coordenadas, anyos, vent, pers);
        this.accesible = accs;
    }

}


