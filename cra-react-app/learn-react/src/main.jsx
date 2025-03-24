import React from 'react'
import ReactDOM from 'react-dom/client'
// -import AppCounter from './AppCounter.jsx'
import App from './AppTodo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <AppCounter /> */}
    <App />
 </React.StrictMode>
);