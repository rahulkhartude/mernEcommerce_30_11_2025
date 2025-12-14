
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
