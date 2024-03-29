import { userSlice } from './../reducers/userSlice';
import axios from "axios"
import { Dispatch } from "redux"



export const registration = (email='', password='') => {
    return async ( dispatch : Dispatch) => {
        try {
            const response = await axios.post('/users/registration', {email: email, password: password})
            // if(response) {
            dispatch( userSlice.actions.registrtation(response.data?.user) )
            // }
        } catch(err) {
            // dispatch({type: userActionTypes.LOGIN_ERROR, payload: 'registration error'})
        }
    }
}

export const login = (email: string, password: string) => {
    return async ( dispatch : Dispatch) => {
        try {
            const response = await axios.post('/users/login', {email: email, password: password})
            dispatch(userSlice.actions.login(response.data?.user))
            localStorage.setItem('CloudDisk-token', response.data?.token)
            
        } catch(err) {
            // dispatch(userSlice.actions.(response.data.user))
        }
    }
}
export const auth = () => {
    return async ( dispatch : Dispatch) => {
        try {
            const response = await axios.get('/users/auth', {
            })
            dispatch( userSlice.actions.login(response.data?.user) )
            // localStorage.setItem('CloudDisk-token', response.data?.token)
        } catch(err) {
            // localStorage.removeItem('CloudDisk-token')
        }
    }
}
export const logout = () => {
    return async ( dispatch : Dispatch) => {
        try {
            dispatch( userSlice.actions.logout() )
            localStorage.removeItem('CloudDisk-token')
        } catch(err) {
            // dispatch(userSlice.actions.(response.data.user))
        }
    }
}
