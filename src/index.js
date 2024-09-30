// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '684255712035-fopai7v838k92cevfgla54o1634v89p5.apps.googleusercontent.com'; 

// Select the root element
const container = document.getElementById('root');
const root = createRoot(container); // Create a root for rendering

// Render the application
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);

