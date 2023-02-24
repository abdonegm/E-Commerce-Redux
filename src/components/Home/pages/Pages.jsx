import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Home from "../Home";
import Details from '../details/Details';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../../style/main.scss";


const Pages = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart/:id' element={<Details />} />
        
        
        </Routes>   
        <Footer />
         
    </BrowserRouter>
    </>
  )
}

export default Pages
