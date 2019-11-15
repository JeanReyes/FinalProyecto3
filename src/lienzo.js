import React, { Component } from 'react';
import Platillos from './platillos';
import Pedidos from './pedidos';

class Lienzo extends Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    Nombre de Tienda
                </div>
                <div className="row">
                    <Platillos/>
                    <Pedidos/>    
                </div>

            </div>
        );
    }
}

export default Lienzo;