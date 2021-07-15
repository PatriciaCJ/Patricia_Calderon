import {useState, useEffect} from 'react';

// Creación del "Hook", debe empezar con "use" para
// que React conozca que es un "Hook" personalizado
// Recibe como parámetro la "url"
export const useHookHttp = (url) => {
    // Tiene los datos obtenidos del llamado al API como estado
    // Inicialmente dicho dato están vacío
    const [datos, setDatos] = useState([]);

    // Usa un efecto secundario para invocar al API y obtener los datos
    // Dichos datos son guardados en el estado con "setDatos"
    useEffect(() => {
        const getDatos = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setDatos(data)
        }

        getDatos()
    }, [url]); // Cada vez que la url cambie se realizará una nueva petición

    // Devuelve los datos como un arreglo
    return [datos];
}
