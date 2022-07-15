import { File } from "./file"

export interface User {
    _id: string,
    email: string,
    password: string,
    diskSpace?: number | null,
    usedSpace?: number | null,
    avatar?: string,
    files?: File[]
}
export interface userState {
    user: User,
    isAuth: boolean
}

// export interface createUserType {
//     email: string,
//     password: string,
// }


// export enum userActionTypes {
//     LOGIN = "LOGIN",
//     LOGOUT = "LOGOUT",
//     LOGIN_ERROR = 'LOGIN_ERROR',
// }

// interface loginUserAction {
//     type: userActionTypes.LOGIN,
//     payload: any
// }
// interface logoutUserAction {
//     type: userActionTypes.LOGOUT
// }

// interface logoutUserErrorAction {
//     type: userActionTypes.LOGIN_ERROR;
//     payload: string;
// }

// export type userAction = 
//     loginUserAction | logoutUserAction | logoutUserErrorAction