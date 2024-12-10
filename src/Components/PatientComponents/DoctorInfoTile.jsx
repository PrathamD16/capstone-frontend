import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
import { Box, Modal } from '@mui/material'
import AppointmentBooking from './AppointmentBooking'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DoctorInfoTile = ({ doctor }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className='shadow-md rounded-lg py-[5vh] bg-gray-100 hover:scale-[102%] transition-all duration-300 hover:bg-gray-200 mx-5 px-10'>
      <Grid container className="flex items-center" spacing={8}>
        <Grid flex={4}>
          <img className='rounded-full' src={""} alt="Profile Pic" />
        </Grid>
        <Grid flex={4}>
          <p className='text-2xl text-blue-900 font-semibold'>{doctor.name}</p>
          <p className='font-normal'>{doctor.specialty}</p>
          <div className=''>
            <p ><span className='font-semibold'>{doctor.experience}+</span> years of experience</p>
            <p className='text-sm font-semibold'>{doctor.location}</p>
            {/* <p className='font-semibold'>{doctor.cost == null ? '600$ Consultancy Fee' : ''}</p> */}
            <p className='font-semibold'>Consultancy Fee {doctor.cost}$</p>
          </div>
        </Grid>
        <Grid flex={4} className="">
          <button onClick={() => setOpen(!open)} className='bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-800'>Book Appointment</button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <Box sx={style}>
          <AppointmentBooking />
        </Box>
      </Modal>
    </div>
  )
}

export default DoctorInfoTile
