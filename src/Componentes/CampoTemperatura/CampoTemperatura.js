import React from 'react';

// Opciones
const nombresEscalas = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class CampoTemperatura extends React.Component {
    constructor(props) {
        super(props);
        this.ejecutarCambios = this.ejecutarCambios.bind(this);
        //this.state = {temperatura: ''};
      }
    
      ejecutarCambios(e) {
        //this.setState({temperatura: e.target.value});
        this.props.ejecutarCambioTemperatura(e.target.value);
      }
    
      render() {
        //const temperatura = this.state.temperatura;
        const temperatura = this.props.temperatura;
        const escala = this.props.escala;
        return (
          <fieldset>
            <legend>Ingrese por favor temperatura en {nombresEscalas[escala]}:</legend>
            <input value={temperatura}
                   onChange={this.ejecutarCambios} />
          </fieldset>
        );
      }
  }
  
export default CampoTemperatura;
