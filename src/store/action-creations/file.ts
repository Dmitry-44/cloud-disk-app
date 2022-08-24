import { uploaderSlice } from './../reducers/uploaderSlice';
import { fileSlice } from './../reducers/fileSlice';
import axios from "axios"
import { Dispatch } from "redux"
import { createFileType, IFile } from '../../types/file';
import { uploaderFile } from '../../types/uploaderFile';


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

export const uploadFile = (file: File, parentId: string | null) => {
    return async (dispatch: Dispatch) => {
        const data = new FormData()
        data.append('file', file)
        if(parentId) {
            data.append('parent', parentId)
        }
        console.log('file in action', file)
        const uploadFile = {id: Date.now().toString(), name: file.name, progress: 0, loaded: false, error: false}
        dispatch( uploaderSlice.actions.activateLoader() )
        dispatch(uploaderSlice.actions.addFile(uploadFile))
        await axios.post('/files/upload', data, {
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                console.log('total', totalLength)
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                    console.log('progress', Math.round((progressEvent.loaded * 100) / totalLength))
                    dispatch(uploaderSlice.actions.updateFile({...uploadFile, progress:progress}))
                }
            }
        }).then((res) => {
            console.log('result', res)
            dispatch(uploaderSlice.actions.updateFile({...uploadFile, progress:100, loaded: true}))
            dispatch( fileSlice.actions.uploadFile(res.data))
        }).catch(err => {
            dispatch(uploaderSlice.actions.updateFile({...uploadFile, progress:100, error: true}))
        })
    }
}

export const downloadFile = async (file: IFile) => {
        let res = await axios.get('/files', {
            params: {id:file._id},
            responseType: 'blob',
        })
        if(res.status === 200) {
            const blob = res.data
            const downloadLink = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href=downloadLink
            link.download = file.name
            document.body.appendChild(link)
            link.click()
            link.remove()
        }
}

export const deleteFile = async (file: IFile) => {
    return async (dispatch: Dispatch) => {
        try {
            let data = {id: file._id}
            console.log('inside method')
            await axios.post('/files/delete', data).then((res)=> {
                console.log('inside response')
                if(res.data.hasOwnProperty('message') && res.data.message === "ok") {
                    dispatch( fileSlice.actions.deleteFile(res.data) )
                }
            })
        } catch(err) {
            console.log(`cretaeDir error: ${err}`)
        }
    }
}
