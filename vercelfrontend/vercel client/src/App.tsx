import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewProject from './pages/newProject'
import Projects from './pages/Projects'
import Dashboard from './pages/dashboard'

const App =()=>(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Dashboard/>}>
    <Route path ="/new" element ={<NewProject/>}></Route>
    <Route path ="/projects" element ={<Projects/>}></Route>

    </Route>
    
  </Routes>
  
  </BrowserRouter>
)

export default App
