import React from 'react'
import Homepage from '../Components/Homepage'
import {Route, Routes} from 'react-router-dom'
import PatientSignUp from '../Components/PatientSignUp'

const PatientRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/patientSignUp' element={<PatientSignUp />} />
    </Routes> 
  )
}

export default PatientRoute
