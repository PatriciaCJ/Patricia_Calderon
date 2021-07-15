import React from 'react';


function SaludoAtenticado(props) {
    return <h1>Bienvenido{props.nombre}!</h1>;
  }
  
  function SaludoInvitado(props) {
    return <h1>Inicie sesión por favor.</h1>;
  }

class Saludo extends React.Component {
   render() {
    if (this.props.estaAutenticado) {
      return <SaludoAtenticado nombre={this.props.nombre} />;
    }
    return <SaludoInvitado />;
  }
}

export default Saludo;
