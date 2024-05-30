import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductoDetalle from "../components/ProductoDetalle/ProductoDetalle"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productodetalle/:productId" element={<ProductoDetalle/>}/>
    </Routes>
  )
}

export default AppRoutes