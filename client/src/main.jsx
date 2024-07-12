import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from './components/About.jsx'
import React from 'react'
import SignIn from './components/SignIn.jsx'
import Registerpage from './components/SignUp.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Registerpage />,
    
  },
  {
    path: '/home',
    element: <App />,
    
  },
  
  {
    path: '/about',
    element: <About />,
    
  },
  {
    path: '/signin',
    element: <SignIn />,
    
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
