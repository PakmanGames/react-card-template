import React from 'react'
import ReactDOM from 'react-dom/client'
// imports for creating routes
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'



import Navigation from './NavigationComponent/Navigation.jsx'
import ErrorPage from './ErrorPage.jsx'
import Input from './InputComponent/Input.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <Input />,
      },
      {
        path: 'about/',
        element: <div>This is the about page</div>
      },
      {
        path: 'contact/',
        element: <div>This is the contact page dont contact me</div>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
