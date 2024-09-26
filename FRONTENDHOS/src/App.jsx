import React from 'react'
import Layout from './Components/Home/Layout/Layout'
import Landing from './Components/Home/Landing/Landing'
import { Route, Routes } from 'react-router-dom'
import Signin from './Components/Auth/Signin/Signin'
import Signup from './Components/Auth/SignUp/SignUp'
import Layoutdash from './Components/Dashboard/Layoutdash'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
    {/* <Route path='*' element={<Notfound/>}/> */}
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Landing/>} />
    <Route path='/home' element={<Landing/>} />
    </Route>


    <Route path='/' element={<Layout/>}>
    <Route path='/user/Signup' element={<Signup/>} />
    <Route path='/user/Signin' element={<Signin/>} />
    </Route>

    <Route path='/user/dashboard' element={<Layoutdash/>}>
    <Route path='/user/dashboard' element={<Dashboard/>}></Route>
    </Route>
    </Routes>
    </>
  )
}

export default App