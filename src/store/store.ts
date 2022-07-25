// import { AppDispatch } from './store';
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import  userReducer from "./reducers/userSlice";
import  fileReducer from "./reducers/fileSlice";


const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer,
})

export function setupStore() {
    return configureStore ({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']