import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import {GitHubProvider} from './context/context'
import { Auth0Provider } from "@auth0/auth0-react";
import './js/main'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-j6r0m2nb.us.auth0.com"
    clientId="y5pt8jV2U8yItBfMGWkW3TOmjNPWKcDV"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GitHubProvider>
    <App />
    </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
