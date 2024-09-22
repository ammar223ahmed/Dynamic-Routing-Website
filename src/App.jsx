import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Footer from './Components/footer'
import AboutPage from './pages/About'
import ContactUs from './pages/ContactUs'
import Products from './pages/Product'
import ProductsDetail from './pages/ProductsDetail'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() { 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element ={<HomePage/>}></Route>
      <Route path="/signin" element ={<Signin/>}></Route>
      <Route path="/signup" element ={<Signup/>}></Route>
      <Route path="/products" element ={<Products/>}></Route>
      <Route path="/about" element ={<AboutPage/>}></Route>
      <Route path="/products/:id" element ={<ProductsDetail/>}></Route>
      <Route path="/contactUs" element ={<ContactUs/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
