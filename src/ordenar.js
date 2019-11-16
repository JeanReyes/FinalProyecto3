import React, {Component} from 'react';
import { configureDevtool } from 'mobx-react-devtools';

class Ordenar extends Component{
    actualizarCantidad(evento){
        this.props.hacerPedido(this.props.indice, evento.target.value);
    }
    // quede en el video 9
    render(){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                <input onChange={this.actualizarCantidad.bind(this)} type="number"/>
                <label className="EspacioPlatillo">Precio: {this.props.precio}</label>
            </div>
        );
    }
}

export default Ordenar;