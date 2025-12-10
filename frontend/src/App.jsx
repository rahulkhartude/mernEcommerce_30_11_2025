import React from 'react'
import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default App
