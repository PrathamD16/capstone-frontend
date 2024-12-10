import { TextField, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Bg1 from '../Images/bg-1.png'
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserData, signIn } from '../Redux/Slices/UserSlices'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[700]
        },
    }
})


const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const [UserEmail, setUserEmail] = useState("")
    const [UserPassword, setPassword] = useState("")
    const [isDoctor, setIsDoctor] = useState(false)
    // const { email, password } = useSelector(state => state.user)
    const nav = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(user)
    }, [])

    const submitHandler = (e) => {
        // Fetch the data, and then set the sessions
        e.preventDefault()

        const loginDto = {
            email: UserEmail,
            password: UserPassword,
            isDoctor
        }

        // setLoading(!loading)
        axios.post(`http://localhost:8080/api/login/signIn`, loginDto)
            .then(res => {
                // setLoading(!loading)
                const cred = {                
                    email: res.data.email,
                    name: res.data.name,
                    id: res.data.id,
                };
                // console.log(cred)
                dispatch(signIn(cred))
                nav("/patient-dashboard")
            })
            .catch(err => {
                // setLoading(!loading)
                console.log(err)
                console.log(`Invalid credential`)
            })




    }

    return (
        <Grid container spacing={2} className="flex items-center">
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-md">
                    <CircularProgress color="inherit" />
                    <p className="mx-2">Please wait...</p>
                </div>
            )}
            <Grid className='bg-gray-100' flex={4}>
                <div className='mx-[5vh] px-5'>
                    <form onSubmit={submitHandler} className='space-y-3'>
                        <ThemeProvider theme={theme}>
                            <div className='flex items-center'>
                                <p className='font-semibold'>Are you a doctor ?</p><Switch onChange={e => setIsDoctor(!isDoctor)} />
                            </div>
                            <div>
                                <span className='font-semibold'>Email</span>
                                <div className='flex'>
                                    <TextField required onChange={e => setUserEmail(e.target.value)} className='flex-1 shadow-md border-none' placeholder='Enter your email' type='email' />
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
                        <Link to={`/signup`}>
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
