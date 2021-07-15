import React from 'react';
import './Comentario.css';
import {obtenerDatos} from '../Funciones/funciones';

class Comentario extends React.Component {
    constructor(props) {
      super(props);
      this.manejadorCambios = this.manejadorCambios.bind(this);
      this.state = {
        cargando: false,
        comentario: null
      };
    }
   
    componentDidMount() {
      obtenerDatos(this.props, this.manejadorCambios);
    }

    manejadorCambios(vcargando, vcomentario){
      this.setState({comentario: vcomentario, cargando: vcargando});
    }
     
    render() {
      return (        
            <p> Comentario:<br/>
          {
          this.state.cargando ? 'Cargando ...' : ( this.state.comentario == null ?
           'No se encontraron datos.' : (this.state.comentario.id + "-" 
           + this.state.comentario.name))}
        </p>
      );
    }
  }

  export default Comentario;
