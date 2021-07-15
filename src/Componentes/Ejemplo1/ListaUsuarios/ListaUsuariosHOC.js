import React from 'react';
//import {obtenerDatos} from '../Funciones/funciones';

class ListaUsuariosHOC extends React.Component {    
  //constructor(props) {
      //super(props);      
      // this.manejadorCambios = this.manejadorCambios.bind(this);
      // this.state = {
      //   cargando: false,
      //   usuarios: null
      // };
    //}

    // componentDidMount() {
    //   obtenerDatos(this.props, this.manejadorCambios);
    // }

    // manejadorCambios(vcargando, vusuarios)
    // {
    //   this.setState({usuarios: vusuarios, cargando: vcargando});
    // }
    render() {
      // this.state.comentario se cambia por this.props.datos y
      // this.state.cargando se cambia por this.props.cargando
      return (        
        <ul>Usuarios HOC:<br/>
          {
          this.props.cargando ? 'Cargando ...' : ( this.props.datos == null ?
            'No se encontraron datos.' : (
          this.props.datos.map((usuario) => (
            <li key={usuario.id}>{usuario.id} - {usuario.name}</li>
          ))))}
        </ul>
      );
    }
  }
  export default ListaUsuariosHOC;
  