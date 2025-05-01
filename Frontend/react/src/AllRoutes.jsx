import React from 'react'
import {Routes, Route} from "react-router-dom";
import About from './About';
import ProductCard from './Components/ProductCard';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
      <Route path='/productCard' element={<ProductCard/>}/>
    </Routes>
  )
}

export default AllRoutes