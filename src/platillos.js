import React, {Component} from 'react';
import './platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';
import Ordenar from './ordenar';

class Platillos extends Component {
    render(){
        let platillosDiv = [];

        const llenarArray = VarTiendaController.platillos.forEach(
            (platillo, index)=>(
                platillosDiv.push(
                    <div className="list-group-item" key={index}>
                        <div className="panel-body">
                            <img role="presentation" src={logo} className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{platillo.nombre}</h2>
                            <div className="DescripcionPlatillo">{platillo.descripcion}</div>
                            <Ordenar precio={platillo.precio}/>
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
                            {platillosDiv}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Platillos;