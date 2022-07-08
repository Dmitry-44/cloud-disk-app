import { File } from "./file"

export interface User {
    _id: string,
    email: string,
    diskSpace: number | null,
    usedSpace: number | null,
    avatar: string,
    files: File[]
}
export interface userState {
    user: User,
    isAuth: boolean
}

export interface createUserType {
    email: string,
    password: string,
}


export enum userActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

interface loginUserAction {
    type: userActionTypes.LOGIN
    payload: User
}
interface logoutUserAction {
    type: userActionTypes.LOGOUT
}

export type userAction = 
    loginUserAction | logoutUserAction