import React from 'react'
import {Routes, Route} from "react-router-dom";
import About from './About';
import SearchCard from './Components/ProductCard';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/searchCard' element={<SearchCard/>}/>
    </Routes>
  )
}

export default AllRoutes