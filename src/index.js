import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Se importa el "store"
import storeF from './Componentes/redux/store'

// Para conectar Redux con React se importa el siguiente paquete
import { Provider } from 'react-redux';

const store = storeF();

// Provider es un componente que tiene como descendiente el componente
// principal de la aplicación, en este caso es "App" y se le pasa como propiedad el "store"

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();