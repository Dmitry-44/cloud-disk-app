import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Reducer } from "react"
import { User, userState } from "../../types/user"

export const initialState: userState = {
    user: {
        _id: '',
        email: '',
        password: '',
        diskSpace: null,
        usedSpace: null,
        avatar: '',
        files: []
    },
    isAuth: false,
}

interface userPayload {
    _id: string,
    email: string,
    diskSpace: number,
    usedSpace: number
  }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registrtation: (state, action: PayloadAction<userPayload>) => {
            state.user._id = action.payload._id
            state.user.email = action.payload.email
            state.user.diskSpace = action.payload.diskSpace
            state.user.usedSpace = action.payload.usedSpace

        },
        login: (state, action: PayloadAction<userPayload>) => {
            state.user._id = action.payload._id
            state.user.email = action.payload.email
            state.user.diskSpace = action.payload.diskSpace
            state.user.usedSpace = action.payload.usedSpace
            state.isAuth = true
        },
        logout: (state) => {
            state.user._id =''
            state.user.email=''
            state.user.password=''
            state.user.diskSpace=null
            state.user.usedSpace=null
            state.user.avatar=''
            state.user.files=[]
            state.isAuth=false
        }
    }
})

export const { registrtation, login } = userSlice.actions

export default userSlice.reducer