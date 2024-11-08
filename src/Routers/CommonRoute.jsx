import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../Components/LoginForm'
import PatientSignUp from '../Components/PatientSignUp'

const CommonRoute = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<PatientSignUp />}/>
    </Routes>
  )
}

export default CommonRoute
