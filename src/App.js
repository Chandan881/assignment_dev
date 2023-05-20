import React from 'react'
import User from './User'
import DetailPage from "./DetailPage"
import { BrowserRouter, Routes, Route }  from 'react-router-dom'




const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={ <User />} />
        <Route path='/detail/:id' element={ <DetailPage />} />
       </Routes>       
      </BrowserRouter>
    </div>
  )
}

export default App