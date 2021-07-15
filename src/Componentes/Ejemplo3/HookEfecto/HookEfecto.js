import React, { useState, useEffect } from 'react';
export function HookEfecto() {
  const [contador, setContador] = useState(1);

  // Similar a componentDidMount y componentDidUpdate: 
  useEffect(() => {
      // Actualiza el título del documento usando la API del browser
      // después del renderizado  
      document.title = `Has clickeado el botón ${contador} veces`;
      // Similar al componentWillUnmount
      return () => {
        document.title = "";
      };  
    }, [contador]); // Solo se vuelve a ejecutar si "contador" ha cambiado
  
  return (
    <div>
      <p>Has clickeado {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Clickeame!
      </button>
    </div>
  );
}
