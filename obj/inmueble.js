class Inmueble {

    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show) {
        this.direccion = direccion;
        this.mCuadrados = mCuadrados;
        this.refCatastral = refCatastral;
        this.precioBase = precioBase;
        this.estado = estado;
        this.coordenadas = coordenadas;
        this.antiguedad = antiguedad;
        this.show = show;
    }
}


class Piso extends Inmueble {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show ,planta, puerta, nHabitaciones, nLavabos, tieneAscensor, tieneTerraza,mCuadradosTerraza) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show);
        this.planta = planta;
        this.puerta = puerta
        this.nHabitaciones = nHabitaciones;
        this.nLavabos = nLavabos;
        this.tieneAscensor = tieneAscensor;
        this.tieneTerraza = tieneTerraza;
        this.mCuadradosTerraza = mCuadradosTerraza;
    }
}


class Casa extends Inmueble {

    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad, show ,tipoDeCasa, nHabitaciones, nLavabos, tieneJardin, tienePiscina, mCuadradosJardin) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad, show);
        this.tipoDeCasa = tipoDeCasa;
        this.nHabitaciones = nHabitaciones;
        this.nLavabos = nLavabos;
        this.tieneJardin = tieneJardin;
        this.tienePiscina = tienePiscina;
        this.mCuadradosJardin = mCuadradosJardin;
    }
}


class Local extends Inmueble {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show ,nVentanas, tienePersianaMetalica) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show);
        this.nVentanas = nVentanas;
        this.tienePersianaMetalica = tienePersianaMetalica;
    }
}
class Comercio extends Local {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show ,nVentanas, tienePersianaMetalica, esAccesible) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tienePersianaMetalica);
        this.esAccesible = esAccesible;
    }

}
class Industrial extends Local {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tienePersianaMetalica, tienePuestoDeCarga, tipoDeSuelo) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tienePersianaMetalica);
        this.tienePuestoDeCarga = tienePuestoDeCarga;
        this.tipoDeSuelo = tipoDeSuelo;
    }
}
class Restauracion extends Local {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tieneVentanaMetalica, tieneExtractorDeHumos, tieneMobiliario, tieneCafetera) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tieneVentanaMetalica);
        this.tieneExtractorDeHumos = tieneExtractorDeHumos;
        this.tieneMobiliario = tieneMobiliario;
        this.tieneCafetera = tieneCafetera;
    }
}
