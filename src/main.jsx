import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App.jsx';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HashRouter used for routing in a static site environment */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);