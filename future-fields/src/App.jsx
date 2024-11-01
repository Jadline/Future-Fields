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


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
     
      <Route path="/about" element = {<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path='/crops' element={<Crops/>} />
      <Route path='/events' element={<Events/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/gallery' element ={<Gallery/>}/>
      <Route path='/livestock' element={<Livestock/>}/>
      <Route path='/ecommerce' element ={<Ecommerce/>}/>
      <Route path='/signin' element ={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
