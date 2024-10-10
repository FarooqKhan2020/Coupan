// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import { RouterProvider } from 'react-router-dom'
// import router from './routes/index.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
  
// <>
    
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>
// </>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './Components/LanguageSelecctor/i18n'; // Import your i18n configuration here
import { I18nextProvider } from 'react-i18next'; // Import the provider
import i18n from './Components/LanguageSelecctor/i18n'; // Import your i18n instance
import { RouterProvider } from 'react-router-dom';
import router from './routes/index'; // Adjust the path if necessary

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <React.StrictMode>
  <I18nextProvider i18n={i18n}> {/* Wrap with I18nextProvider */}
    <RouterProvider router={router} />
  </I18nextProvider>
</React.StrictMode>
);
