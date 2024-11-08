import React from 'react'

const DoctorInfoTile = ({ doctor }) => {
  return (
    <div className='shadow-sm rounded-lg py-[5vh]'>
      <div className='flex justify-around items-center flex-row'>
        <div className='grid-cols-4'>
          <img className='rounded-full' src="" alt="Profile Pic" />
        </div>
        <div className='text-center grid-cols-4'>
          <p className='text-2xl text-blue-900'>{doctor.name}</p>
          <p>{doctor.speciality}</p>
          <p>{doctor.location}</p>
          <p>{doctor?.cost == null ? '600$ Consultancy Fee' : ''}</p>
        </div>
        <div className='grid-cols-4'>
          <button className='bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-800'>Book Clinic</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorInfoTile
