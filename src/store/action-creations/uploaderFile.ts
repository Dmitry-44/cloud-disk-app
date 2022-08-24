import { Dispatch } from "redux"
import { uploaderSlice } from "../reducers/uploaderSlice"

export const deactivateLoader = () => {
    return (dispatch: Dispatch) => {
        dispatch( uploaderSlice.actions.deactivateLoader() )
    }
}

export const activateLoader = () => {
    return (dispatch: Dispatch) => {
        dispatch( uploaderSlice.actions.activateLoader() )
    }
}