import React from 'react';

function activarMensaje(e) {
        e.preventDefault();
        alert('Mensaje enviado con éxito');
      }

class Contáctenos extends React.Component {

  render() {
    return (
      <div>
      <h1>Contáctenos</h1>
      <button onClick={activarMensaje}>Enviar Mensaje</button>
     </div>
    );
  }
}
export default Contáctenos;