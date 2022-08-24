import { IFile } from "./file"

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