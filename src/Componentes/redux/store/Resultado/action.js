// Nombre del método de la acción
// Que recibe como parámetro lo que desea modificar
// Y devuelve un objeto con dos parámetros
    // El identificador de la operación que se ejecuta
    // y lo que se va a modificar
    const actualizarResultado = resultado => {    
        return{
            type: 'ACTUALIZAR_RESULTADO',        
            payload: resultado
        }
    }
    
    export default actualizarResultado;
    