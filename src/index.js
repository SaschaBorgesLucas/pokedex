import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Styles/Reset.css';
import {ThemeTogglerProvider} from './Components/ThemeToggler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeTogglerProvider>
    <App />
    </ThemeTogglerProvider>
   
  </React.StrictMode>
);


reportWebVitals();
