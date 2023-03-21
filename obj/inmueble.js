class Inmueble {
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, antiguedad) {
        this.direccion = direccion;
        this.mCuadrados = mCuadrados;
        this.refCatastral = refCatastral;
        this.precioBase = precioBase;
        this.estado = estado;
        this.coordenadas = coordenadas;
        this.antiguedad = antiguedad;
        this.precio = this.calcularPrecio();
    }

    calcularPrecio() {
        let precio = this.precioBase;

        if (this.antiguedad > 10) {
            let descuento = (antiguedad - 10) * 0.01;
            precio -= precio * descuento;
        } else if (this.antiguedad > 20) {
            precio -= precio * 0.1;
        }

        return precio;
    }
}
class Piso extends Inmueble{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, planta, nHabitaciones, nLavabos, tieneAscensor, mCuadradosTerraza){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas);
        this.planta = planta;
        this.nHabitaciones = nHabitaciones;
        this.nLavabos = nLavabos;
        this.tieneAscensor = tieneAscensor;
        this.mCuadradosTerraza = mCuadradosTerraza;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();
        if (this.tieneAscensor && this.piso >= 3) {
          precio += precio * 0.03;
        }
        if (this.terraza) {
          precio += this.mCuadradosTerraza * 300;
        }
        return precio;
    }
}
class Casa extends Inmueble{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, tipoDeCasa, nHabitaciones, nLavabos, tieneJardin, tienePiscina, mCuadradosJardin){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas);
        this.tipoDeCasa = tipoDeCasa;
        this.nHabitaciones = nHabitaciones;
        this.nLavabos = nLavabos;
        this.tieneJardin = tieneJardin;
        this.tienePiscina = tienePiscina;
        this.mCuadradosJardin = mCuadradosJardin;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();
        if ((this.tieneJardin && this.mCuadrados > 100) && (this.mCuadrados <= 250)){
          precio += precio * 0.05;
        } else if (this.tieneJardin && this.mCuadrados > 250) {
            precio += precio * 0.09;
            if (this.tienePiscina) {
                precio += precio * 0.04;
              }
        }
        return precio;
    }
}
class Local extends Inmueble{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas);
        this.nVentanas = nVentanas;
        this.tieneVentanaMetalica = tieneVentanaMetalica;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();
        if (this.mCuadrados > 50){
          precio += precio * 0.01;
          if (this.nVentanas == 1 || this.nVentanas == 0) {
            precio -= precio * 0.02;
          } else if (this.nVentanas > 4) {
            precio += precio * 0.02;
          }
        }
        return precio;
    }
}
class Comercio extends Local{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica, esAccesible){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica);
        this.esAccesible = esAccesible;
    }
}
class Industrial extends Local{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica, tienePuestoDeCarga, tipoDeSuelo){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica);
        this.tienePuestoDeCarga = tienePuestoDeCarga;
        this.tipoDeSuelo = tipoDeSuelo;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();
        if (this.tipoDeSuelo == "suelo urbano"){
          precio += precio * 0.25;
        }
        return precio;
    }
}
class Restauracion extends Local{
    constructor(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica, tieneExtractorDeHumos, tieneMobiliario, tieneCafetera){
        super(direccion, mCuadrados, refCatastral, precioBase, estado, coordenadas, nVentanas, tieneVentanaMetalica);
        this.tieneExtractorDeHumos = tieneExtractorDeHumos;
        this.tieneMobiliario = tieneMobiliario;
        this.tieneCafetera = tieneCafetera;
    }
}
