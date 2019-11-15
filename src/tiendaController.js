import {extendObservable} from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(this, {
            platillos:[
                {nombre:"primerPlatillo", descripcion:"platillo muy rico", precio: 100, cantidad:0},
                {nombre:"segundoPlatillo", descripcion:"platillo malo", precio: 150, cantidad:0},
                {nombre:"tercerPlatillo", descripcion:"platillo malo", precio: 200, cantidad:0}
            ]
        })
    }
}

var VatTiendaController = new TiendaController
export default VatTiendaController;