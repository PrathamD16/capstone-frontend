import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'

const CommonRoute = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginForm />} />
    </Routes>
  )
}

export default CommonRoute
