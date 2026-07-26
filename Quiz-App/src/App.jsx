import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Quiz" element={<Quiz/>}/> */}
        <Route path="/Result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
