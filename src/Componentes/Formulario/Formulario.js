import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
        this.input = React.createRef();
      }
    
      ejecutarSubmit(event) {
        document.write('Se ha enviado el siguiente mensaje: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.ejecutarSubmit}>
              <label>
              Nombre Completo:
              <input type="text"  name= "nombre" defaultValue="Patricia Calderón Jiménez" ref={this.input} />
            </label>
            <label>
              Correo electrónico:
            <input type="text"  name= "correo" defaultValue="ejemplo@test.com" ref={this.input} />
            </label>
            <label>
              Mensaje:
              <input type="text"  defaultValue="Ingrese el mensaje por favor" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
  }

  export default Formulario;
