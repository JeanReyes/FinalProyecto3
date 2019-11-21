import React, {Component} from 'react';
import './platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';
import Ordenar from './ordenar';

class Bebidas extends Component {
    render(){
        let BebidasDiv = [];

        const llenarArray = VarTiendaController.bebidas.forEach(
            (bebida, index)=>(
                BebidasDiv.push(
                    <div className="list-group-item" key={index}>
                        <div className="panel-body">
                            <img role="presentation" src={logo} className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{bebida.nombre}</h2>
                            <div className="DescripcionPlatillo">{bebida.descripcion}</div>
                            <Ordenar precio={bebida.precio} indice={index} hacerPedido={(indice_d, evento_d)=>{VarTiendaController.bebidasEnLaOrden(indice_d, evento_d)}}/>
                        </div>
                    </div>
                )
            )
        )

        return(
            <div className="container col-md-6" >
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Platillo-Menu">
                            {BebidasDiv}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bebidas;