import React, {Component} from 'react';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';
import {observer} from 'mobx-react';
 
class Pedidos extends Component {
    render(){
        let PlatillosPedidos = [];

        const llenar_PlatillosPedidos = VarTiendaController.platillos.forEach(
            (pedido, index)=>{
                if(pedido.cantidad != 0){
                    PlatillosPedidos.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <h4>{pedido.nombre}</h4><br/>
                                <div className="APrecioCantidad">
                                    <span>Cantidad: {pedido.cantidad}</span>
                                    <span className="PrecioPlatillo">Precio: {pedido.cantidad*pedido.precio}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        ) 

        return(
            <div className="container col-md-6" >
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Pedidos-Menu">
                            {PlatillosPedidos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default observer(Pedidos);