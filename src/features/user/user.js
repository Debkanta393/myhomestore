import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
    data: [],
    loading: false,
    error: false,
    isAuthenticated: false
}


export const loginUser=createAsyncThunk(
    "/user/login", async (data, {rejectWithValue})=>{
        try {
            
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)

export const registerUser=createAsyncThunk(
    "/user/register", async (data, {rejectWithValue})=>{
        try {
            
        } catch (error) {
             return rejectWithValue(error.response?.data || error.message)
        }
    }
)



const userSlice=createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.pending, (state)=>{
            state.loading=true
            state.error=false
            state.isAuthenticated=false
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.data=action.payload.data
            state.loading=false
            state.error=false
            state.isAuthenticated=true
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading=false
            state.error=action.payload.error
            state.isAuthenticated=false
        })
        builder
        .addCase(registerUser.pending, (state)=>{
            state.loading=true
            state.error=false
            state.isAuthenticated=false
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.data=action.payload.data
            state.loading=false
            state.error=false
            state.isAuthenticated=true
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.loading=false
            state.error=action.payload.error
            state.isAuthenticated=false
        })
    }
})

export default userSlice.reducer;