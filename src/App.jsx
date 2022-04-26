import React from 'react'
import { Info } from './Components/Info'
import { Home } from './Components/Home'
import { Navigate,Routes,Route, Link  } from 'react-router-dom'
import './App.css'
import { Details } from './Components/Details'

function App() {
  

  return (
    <div className="App">
      <div style={{display:"flex", "gap":"20px","boxShadow":"rgba(0, 0, 0, 0.35) 0px 5px 15px","margin":"20px","padding":"20px",}}>
       <Link style={{"textDecoration":"none"}} to="/">HOME</Link>
        <Link style={{"textDecoration":"none"}} to="/listing/create">CREATE </Link></div>
   <Routes>
     <Route path="/listing/create"  element={<Info/>}></Route>
     <Route path="/listing/:id"element={<Details/>}></Route>
     <Route path="/"  element={<Home/>}></Route>
   </Routes>
    </div>
  )
}

export default App
