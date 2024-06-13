import { interfaceAlerter } from "../../types/interfaceAlerter";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: interfaceAlerter = {
    form1 : false,
    form2 : false,
    form3 : false
}

interface IAlerter {
    item: string;
    value: boolean;
}

export const AlerterSlice = createSlice({
    name: 'alerter',
    initialState,
    reducers: {
        falseState(state, action: PayloadAction<IAlerter>) {
            state[action.payload.item] = action.payload.value
        },
        changeState(state, action: PayloadAction<IAlerter>) {
            state[action.payload.item] = action.payload.value
        }
    }
})

export default AlerterSlice.reducer