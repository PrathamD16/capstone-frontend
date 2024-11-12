import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlices'

export const store = configureStore({
    reducer:{
        user: UserSlice
    }
})

