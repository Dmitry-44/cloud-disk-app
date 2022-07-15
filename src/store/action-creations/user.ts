import { userSlice } from './../reducers/userSlice';
import { AppDispatch } from '../store';
import axios from "axios"
import { Dispatch } from "redux"
import { User } from "../../types/user"


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
            console.log('response', response)
            // if(response) {
            dispatch( userSlice.actions.login(response.data?.user) )
            // }
        } catch(err) {
            // dispatch(userSlice.actions.(response.data.user))
        }
    }
}
