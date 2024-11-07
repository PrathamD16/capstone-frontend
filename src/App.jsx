import React from 'react'
import Navbar from './Components/Navbar'
import PatientRoute from './Routers/PatientRoute'
import CommonRoute from './Routers/CommonRoute'

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-24 mx-auto px-1">
        <PatientRoute />
        <CommonRoute />
      </div>
    </div>
  )
}

export default App
