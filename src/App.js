import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, Product, SingleProduct, About, Cart, Error, Checkout, Private } from './pages'
function App() {
  return (
     
     <Router>
       <Navbar/>
       <Sidebar/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route  path="/about" element={<About/>}/>
         <Route  path="/cart" element={<Cart/>}/>
         <Route  path="/product" element={<Product/>}/>
         <Route  path="/checkout" element={<Checkout/>}/>
         <Route  path="/*" element={<Error/>}/>
         <Route  path="/singleproduct/:id" element={<SingleProduct/>}/>
       </Routes>
       <Footer/>
     </Router>




  )
}

export default App
