import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Autocomplete, TextField, ThemeProvider, createTheme } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import DoctorInfoTile from './DoctorInfoTile'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
  const [filterData, setFilterData] = useState([])
  const [location, setLocation] = useState("")
  const [date, setDate] = useState(null)
  const user = useSelector(state => state.user)
  const [list, setList] = useState([])
  const [special, setSpecial] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/doctors`)
        setDocData(res.data)
      } catch (err) {
        console.log("Error", err)
      }
    }
    fetchData()
    console.log(user)
    setList(["Endocrinology", "Gastroenterology", "Dentist", "Psychiatry"])
  }, [])


  // console.log(docData)

  useEffect(() => {
    const filtered = docData.filter(doc => {
      const matchLocation = location ? doc.location.toLowerCase().includes(location.toLowerCase()) : true;
      const speciality = special ? doc.speciality.toLowerCase().includes(special.toLowerCase()) : true
      return matchLocation && speciality
    });
    setFilterData(filtered)
  }, [location, date, special])

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='flex space-x-5'>
        <ThemeProvider theme={themePurple}>
          <TextField onChange={e => setLocation(e.target.value)} className='flex-1 shadow-sm' placeholder='Eg: Pune, Delhi' label="Location" type='text' />
        </ThemeProvider>
        <TextField onChange={e => setDate(e.target.value)} className='flex-1 shadow-sm' placeholder='' type='date' />
      </div>
      <Grid container marginTop={2} spacing={2}>
        <Grid flex={3} border={0} >
          <ThemeProvider theme={themePurple}>
            <div className='shadow-sm rounded-md'>
              <div className='p-2 bg-gray-100'>
                <p className='font-semibold'>Search by Specializations</p>
                <Autocomplete
                  className='my-2 py-1 rounded-md'
                  disablePortal
                  defaultValue={list[0]}
                  options={list}
                  onChange={(e, newVal) => {
                    setSpecial(newVal)
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} className='border-none' />}
                />
              </div>
            </div>
          </ThemeProvider>
        </Grid>
        <Grid className="overflow-y-auto h-[70vh]" flex={6} border={0} >
          {
            filterData.length > 0 ?
              filterData.map((doc, _i) => {
                return <div className='my-5' key={_i}>
                  <DoctorInfoTile doctor={doc} />
                </div>
              }) : docData.map((doc, _i) => {
                return <div className='my-5' key={_i}>
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
