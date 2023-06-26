

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/Login/index'
import SignUp from '../components/Signup/index'

// import question from "../pages/Question"
import Question from '../pages/Question'
import Choice from '../pages/Choice'

const AllRoutes = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/question' element={<Question/>}/>
    <Route path='/choice' element={<Choice/>}/>
   </Routes>

    </div>
  )
}

export default AllRoutes