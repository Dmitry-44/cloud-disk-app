import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFile, fileState } from "../../types/file"

export const initialState: fileState = {
    files: [],
    currentDir: null,
    dirStack: [],
}

interface filePayload {
    data: IFile[]
}

export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        getFiles: (state, action: PayloadAction<filePayload>) => {
            state.files = action.payload.data
        },
        createDir: (state, action: PayloadAction<filePayload>) => {
            state.files = [...state.files,...action.payload.data]
        },
        setCurrentDir: (state, action) => {
            state.currentDir = action.payload
        },
        pushToStack: (state, action) => {
            state.dirStack = [...state.dirStack, action.payload]
        },
        popFromStack: (state) => {
            state.dirStack.pop()
        },
        uploadFile: (state, action) => {
            state.files = [...state.files, action.payload]
        },
        deleteFile: (state, action) => {
            state.files = [...state.files.filter(file => file._id === action.payload)]
        }
    }
})

export const { getFiles } = fileSlice.actions

export default fileSlice.reducer