import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { uploaderFile } from "../../types/uploaderFile"


interface uploaderState {
    isActive: boolean,
    files: uploaderFile[]
}

const file1 = {
    id: '1',
    name: 'новый файл',
    progress: 100,
    loaded: true,
    error: false
}
const file2 = {
    id: '2',
    name: 'новый файл222',
    progress: 20,
    loaded: false,
    error: true
}

export const initialState: uploaderState = {
    isActive: true,
    files: [file1,file2],
}

export const uploaderSlice = createSlice({
    name: 'uploader',
    initialState,
    reducers: {
        activateLoader: (state) => {
            state.isActive = true
        },
        deactivateLoader: (state) => {
            state.isActive = false
            state.files = []
        },
        addFile: (state, action) => {
            state.files = [...state.files, action.payload]
        },
        removeFile: (state, action) => {
            state.files = [...state.files.filter(file => file.id != action.payload)]
        },
        updateFile: (state, action) => {
            state.files = [...state.files.map((file) => file.id === action.payload.id 
                ? {...action.payload}
                : {...file}
            )]
        }

    }
})

export const { addFile,deactivateLoader } = uploaderSlice.actions

export default uploaderSlice.reducer