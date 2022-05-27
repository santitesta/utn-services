import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client"
import { Provider } from 'react-redux';
import store from "./redux/store"
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Auth0Provider
        domain="dev-v9dag5xb.us.auth0.com"
        clientId="Lj3ADU2N135OjT9HlnaRvw12PvxBLBmD"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
      </Auth0Provider>,
    </React.StrictMode>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
