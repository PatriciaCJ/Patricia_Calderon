import React, { useState } from 'react';
export function HookEstado() {
  // Se declara una nueva variable de estado, denominada "contador"
  // "useState" es un Hook que devuelve el valor del estado actual y
  // una función para modificarlo
  // el único argumento es "0" que corresponde al estado inicial
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>Has clickeado el botón {contador} veces</p>
      {/* "setContador" es similar "this.setState" en los componentes de clase como:
          this.setState({ contador: this.state.contador + 1 } */}
      <button onClick={() => setContador(contador + 1)}>
        Clickeame!
      </button>
    </div>
  );
}
