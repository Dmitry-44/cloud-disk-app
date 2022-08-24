
import { LinearProgress } from '@mui/material'
import React from 'react'
import { uploaderFile } from '../../types/uploaderFile'
import './uploader_popup.sass'


interface filePropsType {
    file: uploaderFile
}

const progressColor = (file: uploaderFile) => {
    if(file.loaded)return 'success'
    if(file.error)return 'error'
}


const UploaderFile: React.FC<filePropsType> = ({file}) => {
    return (
        <div className='uploaded-file'>
            <span className='name'>{file.name}</span>
            <LinearProgress variant="determinate" value={file.progress} color={progressColor(file)} />
        </div>
    ) 
}

export default UploaderFile
