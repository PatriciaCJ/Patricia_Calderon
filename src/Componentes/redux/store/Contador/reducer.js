// Se importan las constantes con los tipos de acciones
import {AUMENTAR_CONTADOR, DISMINUIR_CONTADOR} from './action'

export default function contadorReducer(state={contador:0, aumentarClicks:0, 
disminuirClicks:0}, action){
    switch(action.type){
        case AUMENTAR_CONTADOR:
          return {
            ...state, // Retorna todo lo que había en el "store" y
            contador: state.contador + 1, // modifica el "contador" y
            aumentarClicks: state.aumentarClicks + 1 // "aumentarClicks"
          };
        case DISMINUIR_CONTADOR:
          return {
            ...state, // Retorna todo lo que había en el "store" y
            contador: state.contador - 1, // modifica el "contador" y
            disminuirClicks: state.disminuirClicks + 1 // "disminuirClicks"
          };      
      default:
         return state;
    }
  }

  // Se exporta esta opción para devolver el valor de "contador" del "state"
  export const selectActiveContador = state => state.contadorReducer.contador;

  
  