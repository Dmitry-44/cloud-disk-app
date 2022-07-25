import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Reducer } from "react"
import { File, fileState } from "../../types/file"

export const initialState: fileState = {
    files: [],
    currentDir: null
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
    }
})

export const { getFiles } = fileSlice.actions

export default fileSlice.reducer