import axios from "axios"
import { Dispatch } from "react"
import { createUserType, userAction, userActionTypes } from "../../types/user"


export const registration = (payload: createUserType) => {
    return async (dispatch: Dispatch<userAction>) => {
        const response = await axios.post('http://localhost:3001/users/registration', payload)
        dispatch({type: userActionTypes.LOGIN, payload: response.data})
    }
}