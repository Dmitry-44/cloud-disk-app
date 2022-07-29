import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { File, fileState } from "../../types/file"

export const initialState: fileState = {
    files: [],
    currentDir: null,
    dirStack: [],
}

interface filePayload {
    data: File[]
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
        }
    }
})

export const { getFiles } = fileSlice.actions

export default fileSlice.reducer