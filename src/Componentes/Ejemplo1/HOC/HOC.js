import React from 'react';
import {obtenerDatos} from '../Funciones/funciones';
import ListaUsuariosHOC from '../ListaUsuarios/ListaUsuariosHOC'
import ComentarioHOC from '../Comentario/ComentarioHOC'

export const ListaUsuariosconSuscripcion = conSuscripcion(
  ListaUsuariosHOC,    
    (props, manejadorCambios) => obtenerDatos(props, manejadorCambios)
  );
  
  export const ComentarioconSuscripcion = conSuscripcion(
    ComentarioHOC,
    (props, manejadorCambios) => obtenerDatos(props, manejadorCambios)
  );

  // Esta función recibe un componente y devuelve otro nuevo
function conSuscripcion(ComponenteEnvuelto, selecionarDatos) {
    return class extends React.Component {
        constructor(props) {
        super(props);
        this.manejadorCambios = this.manejadorCambios.bind(this);
        this.state = {
            cargando : false,
            datos: null
        };      
    }

    componentDidMount() {
      selecionarDatos(this.props, this.manejadorCambios);
    }

    manejadorCambios(vcargando, vdatos){      
      this.setState({datos: vdatos, cargando: vcargando});
    }
            
      render() {
        // Se renderiza el componente envuelto con los nuevos datos, 
        // al pasarlos como props adicionales
        return <ComponenteEnvuelto datos={this.state.datos} 
        cargando={this.state.cargando} {...this.props} />;
      }
    };
  }
