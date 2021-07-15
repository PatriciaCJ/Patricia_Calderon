import logo from './logo.png';
import './App.css';
import Inicio from './Componentes/Inicio/inicio';
import Proyectos from './Componentes/Proyectos/proyectos';
import Contáctenos from './Componentes/Contactenos/contactenos';
import Footer from './Componentes/Footer/footer';
import Navbar from './Componentes/Navbar/Navbar';
import Formulario from './Componentes/Formulario/Formulario';
import Calculadora from './Componentes/Calculadora/Calculadora';
import Listado from './Componentes/Listado/Listado';
import Formulario2 from './Componentes/Ejemplo1/Formulario/Formulario';
import Resultado from './Componentes/Ejemplo1/Resultado/Resultado';
import FormularioContador from './Componentes/Ejemplo2/FormularioContador/FormularioContador';
import ListaUsuarios from './Componentes/Ejemplo1/ListaUsuarios/ListaUsuarios';
import Comentario from './Componentes/Ejemplo1/Comentario/Comentario';
import {ListaUsuariosconSuscripcion, ComentarioconSuscripcion} from './Componentes/Ejemplo1/HOC/HOC';

import {EditorConmutadorHOC, AreaExpandibleHOC} from './Componentes/Ejemplo2/HOCConmutador/HOCConmutador';



function App() {
  const opciones = [
    { id: 1, descripcion: 'Opción 1' },
    { id: 2, descripcion: 'Opción 2' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
        <Inicio/>
        <Proyectos/>
        <Contáctenos/>
        <Formulario/>
        <Calculadora/>
        <Listado/>
        <Footer/>
        <Formulario2/>
        <FormularioContador/>
        <Resultado/>
      </header>

      <ListaUsuarios url='https://jsonplaceholder.typicode.com/users'/>
      <Comentario id="2" url = 'https://jsonplaceholder.typicode.com/comments'/>
      
      HOC's
      <ListaUsuariosconSuscripcion url='https://jsonplaceholder.typicode.com/users'/>
      <ComentarioconSuscripcion id="2" url = 'https://jsonplaceholder.typicode.com/comments'/>

      Ejemplo 2
      <EditorConmutadorHOC texto="Edición de datos" conmutadorEstadoInicial={true}/>
      
      <AreaExpandibleHOC lista={opciones} conmutadorEstadoInicial={true}/>
    </div>
  );
}

export default App;