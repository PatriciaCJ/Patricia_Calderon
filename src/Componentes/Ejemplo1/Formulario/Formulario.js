import React, {useRef} from 'react';
import './Formulario.css';
import actualizarResultado from '../../redux/store/Resultado/action'
import { connect } from 'react-redux';

const Formulario2 = ({actualizarResultado}) => {  
       const resultadoRef = useRef(null);
       const onButtonClick = () => {
         actualizarResultado(resultadoRef.current.value);
       }
        return (
          <div>
            Campo:            
            <input type="text" ref={resultadoRef}/>
            <button onClick={onButtonClick}>Guardar en Store</button>
          </div>
        );

  }
  
// Se conecta con Redux: null = indica si desea recuperar algo de la "store"
export default connect(null, {actualizarResultado}) (Formulario2);



