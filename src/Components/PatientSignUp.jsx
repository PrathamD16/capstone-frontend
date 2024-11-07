import React, { useEffect, useState } from 'react'
import { TextField, Tooltip, InputAdornment, IconButton, Switch } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Bg1 from '../Images/bg-1.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[700]
        },
    }
})


const PatientSignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState(null)
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [location, setLocation] = useState("")
    const [exp, setExp] = useState(null)
    const [license, setLicense] = useState("")

    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        // console.log(toggle)
    }, [toggle])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`submitted`)
    }

    return (

        <Grid container spacing={2} className="flex items-center">
            <Grid flex={4}>
                <ThemeProvider theme={theme}>
                    <div className='mx-[5vh] px-5'>
                        <div>
                            <span className='font-bold'>Are you a doctor?</span><Switch value={toggle} onChange={e => setToggle(!toggle)} />
                        </div>
                        <form onSubmit={submitHandler} className='space-y-2 overflow-y-auto h-[80vh]'>
                            <div>
                                <span className='font-semibold'>Name</span>
                                <Tooltip title="Eg: John Doe" arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setName(e.target.value)} className='flex-1 shadow-md' required type="text" placeholder='Enter your name' />
                                    </div>
                                </Tooltip>
                            </div>
                            <div>
                                <span className='font-semibold'>Email</span>
                                <Tooltip title="Eg: abc@gmail.com" arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setEmail(e.target.value)} className='flex-1 shadow-md' required type="email" placeholder='Enter your email' />
                                    </div>
                                </Tooltip>
                            </div>
                            <div>
                                <span className='font-semibold'>Contact</span>
                                <Tooltip title="Eg: 1234567890" arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setContact(e.target.value)} className='flex-1 shadow-md' required type="number" placeholder='Enter your contact number' />
                                    </div>
                                </Tooltip>
                            </div>
                            <div>
                                <span className='font-semibold'>Date Of Birth</span>
                                <Tooltip title="Eg: 01/01/1994" arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setDob(e.target.value)} className='flex-1 shadow-md' required type="date" placeholder='Enter your date of birth' />
                                    </div>
                                </Tooltip>
                            </div>
                            <div>
                                <span className='font-semibold'>Password</span>
                                <Tooltip title="8 Characters and 1 special character" arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setPassword(e.target.value)} className='flex-1 shadow-md' required type="password" placeholder='Enter your password' />
                                    </div>
                                </Tooltip>
                            </div>
                            <div>
                                <span className='font-semibold'>Confirm Password</span>
                                <Tooltip arrow>
                                    <div className='flex'>
                                        <TextField onChange={e => setConfirmPass(e.target.value)} className='flex-1 shadow-md' required type="password" placeholder='Re-enter your password' />
                                    </div>
                                </Tooltip>
                            </div>
                            {
                                toggle && <div className='space-y-2'>
                                    <div>
                                        <span className='font-semibold'>Speciality</span>
                                        <Tooltip title="Eg: MBBS" arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setSpeciality(e.target.value)} className='flex-1 shadow-md' required type="text" placeholder='Speciality' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>Start Time</span>
                                        <Tooltip arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setStartTime(e.target.value)} className='flex-1 shadow-md' required type="time" placeholder='Start Time' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>End Time</span>
                                        <Tooltip arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setEndTime(e.target.value)} className='flex-1 shadow-md' required type="time" placeholder='Start Time' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>Location</span>
                                        <Tooltip title="Eg: Delhi" arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setLocation(e.target.value)} className='flex-1 shadow-md' required type="text" placeholder='Location' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>Years of Experience</span>
                                        <Tooltip arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setExp(e.target.value)} className='flex-1 shadow-md' required type="number" placeholder='Year of Experience' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>License Number</span>
                                        <Tooltip title="Eg: D12ASA" arrow>
                                            <div className='flex'>
                                                <TextField onChange={e => setLicense(e.target.value)} className='flex-1 shadow-md' required type="text" placeholder='Eg: D1234' />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            }
                            <div className='flex justify-center items-center'>
                                <button type='submit' className='bg-purple-700 py-1 flex-1 rounded-md text-white hover:bg-purple-900 shadow-md'>Sign up</button>
                            </div>
                        </form>
                    </div>
                </ThemeProvider>
            </Grid>
            <Grid flex={8}>
                <div className='flex items-center'>
                    {/* <img className='my-auto mx-auto' src={Bg1} alt="" /> */}
                    <p>Image</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default PatientSignUp
