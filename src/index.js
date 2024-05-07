import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './routerConfig';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom

createRoot(document.getElementById("root")).render( // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <Router>
      <RouterConfig/>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
