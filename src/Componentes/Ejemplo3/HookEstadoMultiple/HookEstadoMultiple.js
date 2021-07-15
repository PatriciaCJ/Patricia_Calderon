import React, { useState } from 'react';
export function HookEstadoMultiple() {
  // Se declaran los estados y se inicializan sus valores para el primer renderizado
  const [edad, setEdad] = useState(36);
  const [nombre, setNombre] = useState('José');
  const [pasatiempos, setPasatiempos] = useState([{ texto: 'Leer' }]);
  
  return (
    <div>
      <p>Edad: {edad}, nombre: {nombre} y pasatiempos: {pasatiempos.map(elemento => elemento.texto + " ")}</p>      
      <button onClick={() => {setEdad(40); setNombre("Raúl"); setPasatiempos([{texto: "Caminar"}, {texto: "Dormir"}])}}>
        Clickeame!
      </button>
    </div>
  );
}
