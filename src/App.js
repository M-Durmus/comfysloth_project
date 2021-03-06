import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, Products, SingleProduct, About, Cart, Error, Checkout, Private } from './pages'
function App() {
  return (
     
     <Router>
       <Navbar/>
       <Sidebar/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route  path="/about" element={<About/>}/>
         <Route  path="/cart" element={<Cart/>}/>
         <Route  path="/products" element={<Products/>}/>
         <Route  path="/checkout" element={<Checkout/>}/>
         <Route  path="/*" element={<Error/>}/>
         <Route  path="/singleproduct/:id" element={<SingleProduct/>}/>
       </Routes>
       <Footer/>
     </Router>




  )
}

export default App
