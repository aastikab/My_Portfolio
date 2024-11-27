import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' for older versions
import './index.css'; // Optional: For styling
import App from './src/App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional: For measuring performance

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: For measuring performance
reportWebVitals();
