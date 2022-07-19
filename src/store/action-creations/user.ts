import { userSlice } from './../reducers/userSlice';
import { AppDispatch } from '../store';
import axios from "axios"
import { Dispatch } from "redux"
import { User } from "../../types/user"


axios.defaults.headers.common['Authorization'] = localStorage.getItem('CloudDisk-token') || '';

export const registration = (email='', password='') => {
    return async ( dispatch : Dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/users/registration', {email: email, password: password})
            console.log('response', response)
            // if(response) {
            dispatch( userSlice.actions.registrtation(response.data?.user) )
            // }
        } catch(err) {
            // dispatch({type: userActionTypes.LOGIN_ERROR, payload: 'registration error'})
        }
    }
}

export const login = (email='', password='') => {
    return async ( dispatch : Dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/users/login', {email: email, password: password})
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
            const response = await axios.get('http://localhost:3001/users/auth', {
            } )
            console.log('response', response)
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
