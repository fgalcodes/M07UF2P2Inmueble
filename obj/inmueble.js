class Inmueble {

    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show) {
        this.direccion = direccion;
        this.mCuadrados = mCuadrados;
        this.refCatastral = refCatastral;
        this.precioBase = precioBase;
        this.estado = estado;
        this.coordenadas = coordenadas;
        this.antiguedad = antiguedad;
        this.precio = precioBase;
        this.show = show;
    }

    calcularPrecioPrincipal() {

        let precioCalc = this.precio;
        let anyosCalc = this.antiguedad;
        anyosCalc = anyosCalc - 10;

        if (anyosCalc > 20) {
            anyosCalc = 20;
            precioCalc = precioCalc - (precioCalc * 0.01)
        }
        else if (anyosCalc <= 20 && anyosCalc >= 10) {
            precioCalc = precioCalc - (precioCalc * 0.01)
        }
        return precioCalc;
    }
}


class Piso extends Inmueble {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show ,planta, puerta, nHabitaciones, nLavabos, tieneAscensor, mCuadradosTerraza) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad,show);
        this.planta = planta;
        this.puerta = puerta
        this.nHabitaciones = nHabitaciones;
        this.nLavabos = nLavabos;
        this.tieneAscensor = tieneAscensor;
        this.mCuadradosTerraza = mCuadradosTerraza;
    }

    calcularPrecio() {
        let precio = super.calcularPrecioPrincipal();
        let precioBase = super.precioBase;

        if (this.tieneAscensor == true && this.planta >= 3) {
            precio += precioBase * 0.03;
        }
        if (this.terraza == true) {
            precio += this.mCuadradosTerraza * 300;
        }
        return precio;
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

    calcularPrecio() {

        let precio = super.calcularPrecioPrincipal();
        let precioBase = super.precioBase;

        if (this.tieneJardin == true && this.mCuadrados > 100 && this.mCuadrados <= 250) {
            precio += precioBase * 0.05;

        }
        else if (this.tieneJardin == true && this.mCuadrados > 250) {
            precio += precioBase * 0.09;
        }
        if (this.tienePiscina == true) {
            precio += precioBase * 0.04;
        }
        return precio;
    }
}


class Local extends Inmueble {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show ,nVentanas, tieneVentanaMetalica) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show);
        this.nVentanas = nVentanas;
        this.tieneVentanaMetalica = tieneVentanaMetalica;
    }
    calcularPrecio() {
        let precio = super.calcularPrecioPrincipal();
        let precioBase = super.precioBase;

        if (super.mCuadrados > 50) {
            precio += precioBase * 0.01;
        }
        if (super.nVentanas == 1 || super.nVentanas == 0) {

            precio -= precioBase * 0.02;
        } else if (super.nVentanas > 4) {
            precio += precioBase * 0.02;
        }
        return precio;
    }
}
class Comercio extends Local {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show ,nVentanas, tieneVentanaMetalica, esAccesible) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tieneVentanaMetalica);
        this.esAccesible = esAccesible;
    }

}
class Industrial extends Local {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tieneVentanaMetalica, tienePuestoDeCarga, tipoDeSuelo) {
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas,antiguedad,show, nVentanas, tieneVentanaMetalica);
        this.tienePuestoDeCarga = tienePuestoDeCarga;
        this.tipoDeSuelo = tipoDeSuelo;
    }

    calcularPrecio() {
        let precio = super.calcularPrecioPrincipal();
        let precioBase = super.precioBase;

        if (super.mCuadrados > 50) {
            precio += precioBase * 0.01;
        }
        if (super.nVentanas == 1 || super.nVentanas == 0) {

            precio -= precioBase * 0.02;
        } else if (super.nVentanas > 4) {
            precio += precioBase * 0.02;
        }

        if(this.tipoDeSuelo == "urbano"){
            precio = precio + precio * 0.25;
        }
        return precio;
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
