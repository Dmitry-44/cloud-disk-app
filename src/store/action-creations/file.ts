import { fileSlice } from './../reducers/fileSlice';
import axios from "axios"
import { Dispatch } from "redux"
import { createFileType, File } from '../../types/file';


export const getFiles = (parent='') => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.get('/files', { params: { parent: parent || ''} }).then((res)=> {
                if(res.data.hasOwnProperty('message') && res.data.message === "ok") {
                    dispatch( fileSlice.actions.getFiles(res.data) )
                }
            })
        } catch(err) {
            console.log(`getFiles error: ${err}`)
        }
    }
}

export const createDir = (file: createFileType) => {
    return async (dispatch: Dispatch) => {
        try {
            let data = {
                name: file.name,
                type: file.type,
                parent: file.parent || ''
            }
            await axios.post('/files', data).then((res)=> {
                if(res.data.hasOwnProperty('message') && res.data.message === "ok") {
                    dispatch( fileSlice.actions.createDir(res.data) )
                }
            })

        } catch(err) {
            console.log(`cretaeDir error: ${err}`)
        }
    }
}

export const setCurrentDir = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch( fileSlice.actions.setCurrentDir(id) )
    }
}
export const pushToStack = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch( fileSlice.actions.pushToStack(id) )
    }
}
export const popFromStack = () => {
    return (dispatch: Dispatch) => {
        dispatch( fileSlice.actions.popFromStack() )
    }
}

export const uploadFile = (file: Blob, parentId: string | null) => {
    return async (dispatch: Dispatch) => {
        const data = new FormData()
        data.append('file', file)
        if(parentId) {
            data.append('parent', parentId)
        }
        console.log('data on front', data)
        await axios.post('/files/upload', data, {
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                console.log('total', totalLength)
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                    console.log(progress)
                }
            }
        }).then((res) => {
            console.log('result', res)
            dispatch( fileSlice.actions.uploadFile(res.data))
        })
    }
}
