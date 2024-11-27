import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root')); //monta la app. se obtiene el DOM que tiene el ID root.
root.render( //inserta el arbol de  componentes React en el DOM.
  <React.StrictMode>
    <Auth0Provider //componente de la librería Auth0 React SDK que proporciona la config para la autenticacion.
      domain= "dev-ajetttoglsxgz176.us.auth0.com" 
      clientId="glsqh9E2wiKDHJ6NLcxfxdToUYSjeaVI" 
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation= 'localstorage'>
      <App /> 
    </Auth0Provider> 
  </React.StrictMode>
);

//app/> es el componente principal de mi aplicacion de react. se renderiza dentro de auth0provider netonces todo dentro de app puede acceder al contexto de autenticacion de auth0.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
