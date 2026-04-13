import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {GET_PAGE_BYSLUG} from "../../api/apis"
import api from "../../api/axios"

const initialState={
    data: [],
    loading: false,
    error: false
}

export const fetchPageData=createAsyncThunk("/getPageData", async(slug, {rejectWithValue})=>{
    try {
        const response=await api.get(`${GET_PAGE_BYSLUG}/${slug}`)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue({error})
    }
})


const pageSlice=createSlice({
    name: "page",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPageData.pending, (state)=>{
            state.loading=true
            state.error=false
        })
        .addCase(fetchPageData.fulfilled, (state, action)=>{
            state.data=action.payload.data
            state.loading=false
            state.error=false
        })
        .addCase(fetchPageData.rejected, (state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})


export default pageSlice.reducer