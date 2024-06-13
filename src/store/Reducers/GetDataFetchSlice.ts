import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dataFetch } from "./ActionCreator";

const initialState:any = {
    data: [],
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(dataFetch.fulfilled, (state, action: PayloadAction<any>) => {
                        state.isLoading = true
                        state.data = action.payload
                    })
            .addCase(dataFetch.pending, (state, action: PayloadAction<any>) => {
                        state.isLoading = true
                        state.error = ''
                    })
            .addCase(dataFetch.rejected, (state, action: PayloadAction<any>) => {
                        state.isLoading = false
                        state.error = action.payload
                    })
    }
})

export default dataSlice.reducer

