import {extendObservable} from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(this, {
            platillos:[
                {nombre:"primerPlatillo", descripcion:"platillo muy rico", precio: 100, cantidad:0},
                {nombre:"segundoPlatillo", descripcion:"platillo malo", precio: 150, cantidad:0},
                {nombre:"tercerPlatillo", descripcion:"platillo malo", precio: 200, cantidad:0}
            ]
        });
    }

    ponerEnLaOrden(index, cantidad){
        this.platillos.forEach((platillo, indice)=>{
            if(index === indice){
                this.platillos[indice].cantidad = cantidad;
            }
        });
    }
}



var VatTiendaController = new TiendaController;
export default VatTiendaController;