import { fileSlice } from './../reducers/fileSlice';
import axios from "axios"
import { Dispatch } from "redux"


export const getFiles = (parent='') => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.get('http://localhost:3001/files/', { params: { parent: parent || ''} }).then((res)=> {
                if(res.data.hasOwnProperty('message') && res.data.message === "ok") {
                    dispatch( fileSlice.actions.getFiles(res.data) )
                }
            })
        } catch(err) {
            console.log(`getFiles error: ${err}`)
        }
    }
}
