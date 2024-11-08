import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { TextField, ThemeProvider, createTheme } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import DoctorInfoTile from './DoctorInfoTile'
import axios from 'axios'
// Specialist - filter
// Date & Location - search

const themePurple = createTheme({
  palette: {
    primary: {
      main: purple[700]
    },
  }
})

const themeBlue = createTheme({
  palette: {
    primary: {
      main: blue[700]
    },
  }
})

const PatientDashboard = () => {

  const [docData, setDocData] = useState([])
  const [filter, setFilter] = useState([])
  const [location, setLocation] = useState(null)
  const [date, setDate] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/doctors`)
        setDocData(res.data)
      }catch(err) {
        console.log("Error",err)
      }
    }
    fetchData()
  }, [])

  console.log(docData)

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='flex space-x-5'>
        <ThemeProvider theme={themePurple}>
          <TextField  onChange={e => setLocation(e.target.value)} className='flex-1 shadow-sm' placeholder='Eg: Pune, Delhi' label="Location" type='text' />
        </ThemeProvider>
        <TextField  onChange={e => setDate(e.target.value)} className='flex-1 shadow-sm' placeholder='' type='date' />
      </div>
      <Grid container marginTop={2} spacing={2}>
        <Grid flex={3} border={0} >
          Filters
        </Grid>
        <Grid className="overflow-y-auto h-[70vh]" flex={6} border={0} >
          {
            docData.map((doc, _i) => {
              return <div className='my-2' key={_i}>
                <DoctorInfoTile doctor={doc} />
              </div>
            })
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default PatientDashboard
