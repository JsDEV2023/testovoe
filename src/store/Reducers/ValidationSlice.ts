import { PayloadAction, createSlice } from "@reduxjs/toolkit"


// состояние валидации для форм заполнения


const initialState:{[key: string]: any} = {
    form1: false,
    form2: false,
    form3: false,
    formAgreement: {
        agreement1 : false,
        agreement2 : false,
        agreement3 : false
    }
}

interface booleanValidationAction {
    item: any;
    value: boolean;
}

interface checkboxToggleAction {
    item: string;
    agreement: any ;
}

export const ValidationSlice = createSlice({
    name: 'validaton',
    initialState,
    reducers: {
        falseValidation(state, action: PayloadAction<booleanValidationAction>) {
            state[action.payload.item] = action.payload.value
        },
        trueValidation(state, action: PayloadAction<booleanValidationAction>) {
            state[action.payload.item] = action.payload.value
        },
        checkboxToggle(state, action: PayloadAction<checkboxToggleAction>) {
            state[action.payload.item][action.payload.agreement] = !state[action.payload.item][action.payload.agreement]
        }
    }
})

export default ValidationSlice.reducer