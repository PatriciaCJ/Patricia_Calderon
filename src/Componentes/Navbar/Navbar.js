
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,  Route,
  Link,  Redirect,
  useHistory,  useLocation,
  Prompt,
  useRouteMatch
} from "react-router-dom";

export default function EnrutamientoNavegacion() {
  return (
    <Router>
      <div>
        <BotonAutenticado />

        <div>
            <div>
                <Link to="/paginainicio">Inicio</Link>
            </div>
            <div>
                <Link to="/paginaprivada">Nosotros</Link>
            </div>
            <div>
                <Link to="/paginaproyectos">Proyectos</Link>
            </div>
            <div>
                <Link to="/paginaformulario">Contáctenos</Link>
            </div>
            <EnlacePersonalizado activeOnlyWhenExact={true} to="/enlacepersonalizado" label="Blog" />
            <hr />
        </div>

        <Switch>
          <Route path="/paginainico">
            <PaginaPublica />
          </Route>
          <Route path="/autenticacion">
            <PaginaAutenticacion />
          </Route>
          <RutaPrivada path="/paginaproyectos">
            <PaginaPrivada />
          </RutaPrivada>
          <RutaPrivada path="/paginaformulario">
            <PaginaPrivadaFormulario />
          </RutaPrivada>
          <Route exact path="/enlacepersonalizado">
            <PrimeraPagina />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const autenticacionSimulada = {
  estaAutenticado: false,
  autenticar(cb) {
    autenticacionSimulada.estaAutenticado = true;
    setTimeout(cb, 100); // falso proceso de autenticación
  },
  cerrarsesion(cb) {
    autenticacionSimulada.estaAutenticado = false;
    setTimeout(cb, 100);
  }
};

function BotonAutenticado() {
  let history = useHistory();

  return autenticacionSimulada.estaAutenticado ? (
    <p>
      Hola!{" "}
      <button
        onClick={() => {
            autenticacionSimulada.cerrarsesion(() => history.push("/"));
        }}
      >
        Cerrar Sesión
      </button>
    </p>
  ) : (
    <p>No esta autenticado en el sitio.</p>
  );
}

// Redirecciona a la página de autenticación si no esta autenticado.
function RutaPrivada({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      autenticacionSimulada.estaAutenticado ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/autenticacion",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PaginaPublica() {
  return <h3>Página Pública</h3>;
}

function PaginaPrivada() {
  return <h3>Página Privada: Información clasificada</h3>;
}

function PaginaPrivadaFormulario() {
    // Formulario que bloquea el cambio de vista si el usuario ha ingresado algún
    // texto en el mismo
    let [estaBloqueado, definirEstaBloqueado] = useState(false);

    return(
    <div>
    <h3>Página Privada Formulario: Información clasificada</h3>

    <form
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        definirEstaBloqueado(false);
      }}
    >
      <Prompt
        when={estaBloqueado}
        message={location =>
          `Esta seguro de querer ir a la dirección ${location.pathname}`
        }
      />

      <p>
        Bloqueado?{" "}
        {estaBloqueado ? "Sí, clickea un enlace o el botón de retroceso del navegador" : "No"}
      </p>

      <p>
        <input
          size="40"
          placeholder="Ingrese algún texto por favor"
          onChange={event => {
            definirEstaBloqueado(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Enviar para No Bloquear</button>
      </p>
    </form>

    </div>
    );
  }

function PaginaAutenticacion() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let autenticacion = () => {
    autenticacionSimulada.autenticar(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>Debe estar autenticado para ir a la página {from.pathname}</p>
      <button onClick={autenticacion}>Ingresar</button>
    </div>
  );
}

// Enlaces Personalizados
function EnlacePersonalizado({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link to={to}>{label}</Link>
      </div>
    );
  }
  
  function PrimeraPagina() {
    return (
      <div>
        <h2>Bienvenidos a JOTACONZETA</h2>
      </div>
    );
  }
  
  