import React from 'react';
//import {obtenerDatos} from '../Funciones/funciones';

class ComentarioHOC extends React.Component {
    //constructor(props) {
      //super(props);
      // this.manejadorCambios = this.manejadorCambios.bind(this);
      // this.state = {
      //   cargando: false,
      //   comentario: null
      // };
    //}
   
    
    // componentDidMount() {
    //   obtenerDatos(this.props, this.manejadorCambios);
    // }

    // manejadorCambios(vcargando, vcomentario)
    // {
    //   this.setState({comentario: vcomentario, cargando: vcargando});
    // }
     
    render() {
      // this.state.comentario se cambia por this.props.datos y
      // this.state.cargando se cambia por this.props.cargando
      return (        
            <p> Comentario HOC:<br/>
          {
          this.props.cargando ? 'Cargando ...' : ( this.props.datos == null ?
           'No se encontraron datos.' : (this.props.datos.id + "-" 
           + this.props.datos.name))}
        </p>
      );
    }
  }

  export default ComentarioHOC;
  