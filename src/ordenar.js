import React, {Component} from 'react';
import { configureDevtool } from 'mobx-react-devtools';

class Ordenar extends Component{
    actulaizarCantidad(evento){
        console.log(evento);
    }
    // quede en el video 9
    render(){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                <input onChange={this.actulaizarCantidad.bind(this)} type="number"/>
                <label className="EspacioPlatillo">Precio: {this.props.precio}</label>
            </div>
        );
    }
}

export default Ordenar;