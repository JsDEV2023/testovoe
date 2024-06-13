import { configureStore, combineReducers } from '@reduxjs/toolkit'
import inputDataReducer from './Reducers/InputSlice'
import outputDataReducer from './Reducers/OutputSlice'
import alerterReducer from './Reducers/AlerterSlice'
import modelReducer from './Reducers/ObjectRepresentationForm3'
import validationReducer from './Reducers/ValidationSlice';
import dataReducer from './Reducers/GetDataFetchSlice'



 const rootReducer = combineReducers({
    validationReducer,
    inputDataReducer,
    outputDataReducer,
    alerterReducer,
    modelReducer,
    dataReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']