import React from 'react';
import Temperatura from '../AguaHirviendo/AguaHirviendo';
import CampoTemperatura from '../CampoTemperatura/CampoTemperatura';

function aCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function aFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertirTemperatura(temperatura, conversion) {
  const campo = parseFloat(temperatura);
  if (Number.isNaN(campo)) {
    return '';
  }
  const salida = conversion(campo);
  const redondeado = Math.round(salida * 1000) / 1000;
  return redondeado.toString();
}

class Calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.ejecutarCambioCelsius = this.ejecutarCambioCelsius.bind(this);
      this.ejecutarCambioFahrenheit = this.ejecutarCambioFahrenheit.bind(this);
      this.state = {temperatura: '', escala: 'c'};
    }
  
    ejecutarCambioCelsius(temperatura) {
      this.setState({escala: 'c', temperatura});
    }
  
    ejecutarCambioFahrenheit(temperatura) {
      this.setState({escala: 'f', temperatura});
    }
      
      render() {
        const escala = this.state.escala;
        const temperatura = this.state.temperatura;
        const celsius = escala === 'f' ? convertirTemperatura(temperatura, aCelsius) : temperatura;
        const fahrenheit = escala === 'c' ? convertirTemperatura(temperatura, aFahrenheit) : temperatura;
    
        return (
          <div>
            <CampoTemperatura
              escala="c"
              temperatura={celsius}
              ejecutarCambioTemperatura={this.ejecutarCambioCelsius} />
            <CampoTemperatura
              escala="f"
              temperatura={fahrenheit}
              ejecutarCambioTemperatura={this.ejecutarCambioFahrenheit} />
            <Temperatura
              celsius={parseFloat(celsius)} />
          </div>
        );

      }
  }
  
export default Calculadora;
