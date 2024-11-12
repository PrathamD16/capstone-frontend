import React from 'react'
import Homepage from '../Components/Homepage'
import {Route, Routes} from 'react-router-dom'
import PatientSignUp from '../Components/PatientSignUp'
import PatientDashboard from '../Components/PatientComponents/PatientDashboard'
import AppointmentBooking from '../Components/PatientComponents/AppointmentBooking'

const PatientRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/patient-dashboard' element={<PatientDashboard />}/>
        <Route path='/book-appointment/:did' element={<AppointmentBooking />}/>
    </Routes> 
  )
}

export default PatientRoute
