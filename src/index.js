//Dependencies
import React from 'react';  //node-module
import ReactDOM from 'react-dom/client'; //node-module
import './index.scss'; //css
import App from './app/App'; //jsx,js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

