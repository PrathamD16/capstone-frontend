import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Bg1 from '../Images/bg-1.png'
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[700]
        },
    }
})


const LoginForm = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {

    }

    return (
        <Grid container spacing={2} className="flex items-center">
            <Grid className='bg-gray-100' flex={4}>
                <div className='mx-[5vh] px-5'>
                    <form onSubmit={submitHandler} className='space-y-3'>
                        <ThemeProvider theme={theme}>
                            <div>
                                <span className='font-semibold'>Email</span>
                                <div className='flex'>
                                    <TextField required onChange={e => setUserName(e.target.value)} className='flex-1 shadow-md border-none' placeholder='Enter your email' type='email' />
                                </div>
                            </div>
                            <div>
                                <span className='font-semibold'>Password</span>
                                <div className='flex'>
                                    <TextField required onChange={e => setPassword(e.target.value)} className='flex-1 shadow-md border-none' placeholder="Enter your Password" type='password' />
                                </div>
                            </div>
                        </ThemeProvider>
                        <div className='flex justify-center'>
                            <button type='submit' className='bg-purple-700 flex-auto rounded-md text-white py-1 font-semibold hover:bg-purple-900'>Sign in</button>
                        </div>
                        <div>
                            <p className='font-semibold text-blue-800 hover:cursor-pointer hover:underline'>Forgot Password</p>
                        </div>
                        <Link to={`/patientSignUp`}>
                            <p className='font-semibold textt-sm text-blue-700 hover:underline hover:cursor-pointer my-1'>Not having account ? <span className=''>Sign up</span></p>
                        </Link>
                    </form>
                </div>
            </Grid>
            <Grid className="items-center" flex={8}>
                <div>
                    {/* <img className='my-auto mx-auto' src={Bg1} alt="" /> */}
                    <p>Image</p>
                </div>
            </Grid>

        </Grid>
    )
}

export default LoginForm
