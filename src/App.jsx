import React from 'react'
import Person from './Person'
import Products from './components/Products'
import Counter from './components/Counter'
import Movices from './MoviceZone/Movices' 
import MealDetail from './Food_Recipe/MealDetail'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import ProductDetails from './components/Product_Details'
import MealsDetailsView from './Food_Recipe/MealsDetailsView'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Home from './pages/Home'

const App = () => {

  return (
     <>
     {/* <Counter/> */}
     {/* <Person/> */}
     {/* <Products/> */}
     {/* <Movices/>  */}
     {/* <MealDetail/> */} 
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='counter' element={<Counter/>} />
        <Route path='person' element={<Person/>} />
        <Route path='products' element={<Products/>} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='movices' element={<Movices/>} />
        <Route path='meals' element={<MealDetail/>} />
        <Route path='meals/:id' element={<MealsDetailsView/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='profile' element={<Profile/>} /> 
      </Routes>
     </BrowserRouter>
     </>
  )
}
 
export default App