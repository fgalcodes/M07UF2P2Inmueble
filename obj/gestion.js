class Gestion {

    inmuebles = [];

    altaInmueble(inmueble) {
        this.inmuebles.push(inmueble);
    }

    bajaInmueble(refCatastral) {
        for (let i; i < this.inmuebles.length; i++) {
            if (this.inmuebles[i].refCatastral == refCatastral) {
                this.inmuebles.splice(i, 1);
            }
        }
    }
    desactivarInmueble(refCatastral) {
        for (let inmueble of this.inmuebles) {
            if (inmueble.refCatastral == refCatastral) {
                inmueble.show = false;
            }
        }
        //reload del section que contendria los inmuebles
    }
    modificarInmueble(inmueble,clave,valor) 
    {
        inmueble[clave] = valor;
    }

    calcularPrecioInmueble(inmueble) {
        let precioCalc = inmueble.precioBase;
        let anyosCalc = inmueble.antiguedad;
        anyosCalc = anyosCalc - 10;

        if (anyosCalc > 20) {
            anyosCalc = 20;
            precioCalc = precioCalc - (precioCalc * 0.01);
        }
        else if (anyosCalc <= 20 && anyosCalc >= 10) {
            precioCalc = precioCalc - (precioCalc * 0.01);
        }
        return precioCalc;
    }

    calcularPrecioPiso(piso) {

        let precio = this.calcularPrecioInmueble(piso);

        let precioBase = piso.precioBase;

        if (piso.tieneAscensor == true && piso.planta >= 3) {
            precio += precioBase * 0.03;
        }
        if (piso.tieneTerraza == true) {
            precio += piso.mCuadradosTerraza * 300;
        }
        return precio;
    }

    calcularPrecioCasa(casa){
        let precio = this. calcularPrecioInmueble(casa);
        let precioBase = casa.precioBase;

        if (casa.tieneJardin == true && casa.mCuadrados > 100 && casa.mCuadrados <= 250) {
            precio += precioBase * 0.05;

        }
        else if (casa.tieneJardin == true && casa.mCuadrados > 250) {
            precio += precioBase * 0.09;
        }
        if (casa.tienePiscina == true) {
            precio += precioBase * 0.04;
        }
        return precio;
    }

    calcularPrecioLocal(local)
    {
        let precio = this. calcularPrecioInmueble(local);
        let precioBase = local.precioBase;

        if (local.mCuadrados > 50) {
            precio += precioBase * 0.01;
        }
        if (local.nVentanas == 1 || local.nVentanas == 0) {

            precio -= precioBase * 0.02;
        } else if (local.nVentanas > 4) {
            precio += precioBase * 0.02;
        }
        return precio;
    }

    calcularPrecioInsdustria(industria)
    {
        let precio = super. calcularPrecioInmueble(industria);
        let precioBase = industria.precioBase;

        if (industria.mCuadrados > 50) {
            precio += precioBase * 0.01;
        }
        if (industria.nVentanas == 1 || industria.nVentanas == 0) {

            precio -= precioBase * 0.02;
        } else if (industria.nVentanas > 4) {
            precio += precioBase * 0.02;
        }

        if(industria.tipoDeSuelo == "urbano"){
            precio = precio + precio * 0.25;
        }
        return precio;
    }

}