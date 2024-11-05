// import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Crops from "./pages/Crops"
import Events from "./pages/Events"
import FAQs from "./pages/FAQs"
import Gallery from "./pages/Gallery"
import Livestock from "./pages/Livestock"
import Ecommerce from "./Exclusive/Ecommerce"
import SignIn from "./pages/SignIn"
import Cattle from './pages/Cattle'
import Poultry from './pages/Poultry'
import Goats from './pages/Goats'
import OtherAnimals from './pages/OtherAnimals'
import Grains from "./pages/Grains"
import Fruits from "./pages/Fruits"
import Vegetables from "./pages/Vegetables"
import Herbs from "./pages/Herbs"
import CropTech from "./pages/CropTech"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
     
      <Route path="/about" element = {<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path='/crops' element={<Crops/>}>
        <Route index element={<Grains/>}/>
        <Route path='grains' element={<Grains/>}/>
        <Route path='fruits' element={<Fruits/>}/>
        <Route path='veggies' element={<Vegetables/>}/>
        <Route path='herbs' element={<Herbs/>}/>
        <Route path='croptech' element={<CropTech/>}/>
      </Route>
      <Route path='/events' element={<Events/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/gallery' element ={<Gallery/>}/>
      <Route path='/livestock' element={<Livestock/>}>
        <Route index element={<Cattle/>}/>
        <Route path='cattle' element={<Cattle/>}/>
        <Route path='goats' element={<Goats/>}/>
        <Route path='poultry' element={<Poultry/>}/>
        <Route path='otheranimals' element={<OtherAnimals/>}/>
      </Route>
      <Route path='/ecommerce' element ={<Ecommerce/>}/>
      <Route path='/signin' element ={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
