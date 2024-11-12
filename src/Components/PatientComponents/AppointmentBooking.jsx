import { Autocomplete, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { createTheme , ThemeProvider,  } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[700]
        },
    }
})

const AppointmentBooking = ({ did, cost, pid }) => {

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setMinDate(today);
        setList(['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'])
    }, [])

    const [list, setList] = useState([])
    const [date, setDate] = useState(null)
    const [minDate, setMinDate] = useState(null);
    const [slot, setSlot] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        const form = {
            date, slot
        }

        console.log(form)
    }

    return (
        <div className="">
            <ThemeProvider theme={theme}>
                <form onSubmit={submitHandler}>
                    <div className=''>
                        <span className='font-semibold'>Date</span>
                        <Tooltip title="Eg: 01/01/1994" arrow>
                            <div className='flex'>
                                <input min={minDate} onChange={e => setDate(e.target.value)} className='flex-1 shadow-md my-2 py-3 px-2 rounded-md' required type="date" placeholder='Enter your date of birth' />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='my-2'>
                        <span className='font-semibold'>Time Slot</span>
                        <Tooltip arrow>
                            <div className='flex'>
                                <Autocomplete
                                    className='flex-1 shadow-md my-2 py-3 px-2 rounded-md'
                                    disablePortal
                                    options={list}
                                    onChange={(e, newVal) => {
                                        setSlot(newVal)
                                    }}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} className='border-none'/>}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='flex items-center text-center text-white'>
                        <button type='submit' className='flex-1 bg-purple-700 py-1 rounded-md hover:bg-purple-900 transition-all duration-300'>Book Appointment</button>
                    </div>
                </form>
            </ThemeProvider>
        </div>
    )
}

export default AppointmentBooking
