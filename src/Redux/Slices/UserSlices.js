import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const userState = {
    isSignedIn: false,
    pid: null,
    name: "",
    contact: "",
    email: "",
    gender: "",
    dob: "",
    password: "",
    loading: false,
    error: null
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
            state.isSignedIn = true;
            state.pid = action.payload.pid;
            state.name = action.payload.name;
            state.contact = action.payload.contact;
            state.email = action.payload.email;
            state.gender = action.payload.gender;
            state.dob = action.payload.dob;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.pid = action.payload.pid;
                state.name = action.payload.name;
                state.contact = action.payload.contact;
                state.email = action.payload.email;
                state.gender = action.payload.gender;
                state.dob = action.payload.dob;
                state.password = action.payload.password;
            })
    }

})

export const { signIn, signOut, updateUser } = UserSlice.actions;
export default UserSlice.reducer