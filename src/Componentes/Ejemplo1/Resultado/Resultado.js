import React from 'react';
import './Resultado.css';
import { connect } from 'react-redux';
import { selectActiveResultado } from '../../redux/store/Resultado/reducer';

const Resultado = ({resultado}) => 
  <div>
    {resultado}
  </div>

// Se crea la función para acceder al contenido de la "store"
const mapStateToProps = state => {
  return {
    resultado: selectActiveResultado(state)
  }
}

// Se conecta con la "store" de Redux: se quita el segundo parámetro que
// era la función que modificaba el "store"
// Se incluye el método que recupera el valor del "store"
export default connect(mapStateToProps) (Resultado); 



