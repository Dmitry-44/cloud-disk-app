import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
    user: userReducer
})

// export const store = () => {
//     return configureStore({
//         reducer: rootReducer
//     })
// }

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof store>
// export type AppDispatch = AppStore['dispatch']