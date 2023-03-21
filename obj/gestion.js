class Gestion {

    inmuebles = [];

    altaVivienda(inmueble) 
    {
        this.inmuebles.push(inmueble);
    }

    bajaVivienda(refCatastral)
    {
       for(let i; i < this.inmuebles.length; i++)
       {
            if(this.inmuebles[i].refCatastral == refCatastral)
            {
                this.inmuebles.splice(i,1);
            }
       } 
    }
    desactivarInmueble(refCatastral)
    {
        for(let inmueble of this.inmuebles)
        {
            if(inmueble.refCatastral == refCatastral){
                inmueble.show = false;
            }
        }
        //reload del section que contendria los inmuebles
    }
    modificarInmueble(refCatastral)
    {

    }
}