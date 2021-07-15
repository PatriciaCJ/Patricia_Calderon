import React, { useState, useReducer } from 'react';
import {useHookHttp} from '../useHookHttp/useHookHttp';

export const Componente = () => {
    const [id, setId] = useState(1);    
    // const [usuario, setUsuario] = useHookHttp(`https://jsonplaceholder.typicode.com/users/${id}`);
    // Como "setUsuario" no se utiliza se puede indicar de la siguiente forma:
    const [usuario] = useHookHttp(`https://jsonplaceholder.typicode.com/users/${id}`);

    const manejarIdAnterior = () => {
        if (id > 1) setId(id - 1)
    }

    const manejarIdSiguiente = () => {
        setId(id + 1)
    }

    return (
        <div>
            <h1>{usuario.id}</h1>
            <h2>{usuario.name}</h2>
            <p>{usuario.username}</p>
            <button onClick={manejarIdAnterior}>Id Anterior</button>
            <p>{id}</p>
            <button onClick={manejarIdSiguiente}>Id SIguiente</button>
        </div>
    )
}
