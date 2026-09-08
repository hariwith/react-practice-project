import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Cards from './Components/Cards/Cards'
import axios from "axios"
import Contact from './Components/Contact/Contact'
import {Route,Routes} from 'react-router-dom'



const App = () => {

  const [data,setdata] = useState([])
  const [dis,setdis] = useState("none")
  const [name,setname] = useState("")

  const task =  async ()=>{

    let data1 = await axios.get('https://fakestoreapi.com/products')
    setdata(data1.data)


  }

  const disp = ()=>{
    setdis("block")
  }

  const n = (e)=>{
    setname(e.target.value)
  }

  

  useEffect(()=>{task()},[])
  

  return (
    <div>
      <div className="app-con">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/cards' element={<Cards d={data} />}/>
        <Route path='/contact' element={<Contact dis={dis} n={n} name={name} s={setdis} />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
