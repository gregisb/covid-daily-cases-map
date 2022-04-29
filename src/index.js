import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CovidProvider from './context/CovidProvider';

ReactDOM.render(
  <CovidProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CovidProvider>,
  document.getElementById('root')
);
