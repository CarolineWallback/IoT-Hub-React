import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';


Providers.globalProvider = new Msal2Provider({
  clientId: 'e0c9fb31-e260-4931-bbb9-014e9db77951',
  scopes: ['Mail.ReadBasic', 'Mail.Read', 'calendars.read', 'user.read', 'openid', 'profile', 'people.read', 'user.read.all', 'files.read']
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
