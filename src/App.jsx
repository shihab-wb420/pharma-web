//import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from "./pages/Products"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () => {
  

  return (
  <>
    <Navbar/>
    <div id="App-container"> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products />}/>
      </Routes>
    </div>
   </>
  )
}

export default App
