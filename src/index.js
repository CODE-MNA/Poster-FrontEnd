import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './auth/authContext';
import { PageContextProvider } from './pages/pageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AuthContextProvider>
      <PageContextProvider>
      <App />
      </PageContextProvider>
    </AuthContextProvider>
 
);

