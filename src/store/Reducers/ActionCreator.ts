import axios from "axios";
import { AppDispatch } from "../Index";
import { dataSlice } from "./GetDataFetchSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchDataServer = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(dataSlice.actions.dataFetching())
//         const response = await axios.get<any>('hhtp://jsonplasceholder.typicode.com/users')
//         dispatch(dataSlice.actions.dataFetchingSuccess(response.data))
//     } catch (e:any) {
//         dispatch(dataSlice.actions.dataFetchingError(e.message))
//     }
// }

export const dataFetch = createAsyncThunk(
    'data/fetchAll',
    async (_, thunkAPI) => {
//         axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        const response = await axios<any>({method: 'get', url:'https://deti.maksimov.keenetic.name/identity-documents',})
        console.log(response)
        return response.data
    }
)
