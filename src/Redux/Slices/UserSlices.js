import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { act } from "react";

const userState = {
    isSignedIn: false,
    name: "",
    email: "",
    id:0,
}

export const fetchUserData = createAsyncThunk(
    "userstates/fetchUserData",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/patients?pid=${userId}`);
            return response.data[0];
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



const UserSlice = createSlice({
    name: "userstates",
    initialState: userState,
    reducers: {
        signIn: (state, action) => {
            state.isSignedIn = action.payload?.isSignedIn | true,
            state.email = action.payload.email,
            state.name = action.payload.name
            state.id = state.payload.id
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchUserData.pending, (state) => {
        //         state.loading = true;
        //         state.error = null;
        //     })
        //     .addCase(fetchUserData.fulfilled, (state, action) => {
        //         state.loading = false;
        //         state.pid = action.payload.pid;
        //         state.name = action.payload.name;
        //         state.contact = action.payload.contact;
        //         state.email = action.payload.email;
        //         state.gender = action.payload.gender;
        //         state.dob = action.payload.dob;
        //         state.password = action.payload.password;
        //     })
        //     .addCase(fetchUserData.rejected, (state) => {
        //         state.loading = false;
        //         state.error = new Error()
        //     })
    }

})

export const { signIn } = UserSlice.actions;
export default UserSlice.reducer