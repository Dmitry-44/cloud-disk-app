

// const SET_USER="SET_USER"

import { userAction, userActionTypes, userState } from "../../types/user"

const initialState: userState = {
    user: {
        _id: '',
        email: '',
        diskSpace: null,
        usedSpace: null,
        avatar: '',
        files: []
    },
    isAuth: false,
}

export const userReducer = (state=initialState, action: userAction): userState => {

    switch (action.type) {
        case userActionTypes.LOGIN:
            return {...state, user: action.payload, isAuth: true}
        case userActionTypes.LOGOUT:
            return {...initialState}
        default:
            return state
    }
    
}
