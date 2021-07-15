import React from 'react';
import './ListaUsuarios.css';
import {obtenerDatos} from '../Funciones/funciones';

class ListaUsuarios extends React.Component {
    constructor(props) {
      super(props);
      this.manejadorCambios = this.manejadorCambios.bind(this);
      this.state = {
        cargando: false,
        usuarios: null
      };
    }

    componentDidMount() {
      obtenerDatos(this.props, this.manejadorCambios);
    }

    manejadorCambios(vcargando, vusuarios) {
      this.setState({usuarios: vusuarios, cargando: vcargando});
    }

    render() {
      return (        
        <ul>Usuarios:<br/>
          {
          this.state.cargando ? 'Cargando ...' : ( this.state.usuarios == null ?
            'No se encontraron datos.' : (
          this.state.usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.id} - {usuario.name}</li>
          ))))}
        </ul>
      );
    }
  }
  export default ListaUsuarios;
  