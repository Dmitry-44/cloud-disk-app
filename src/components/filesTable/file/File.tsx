import React from 'react'
import { File } from '../../../types/file'
import FolderIcon from '@mui/icons-material/Folder';
import './file.sass'

interface filePropsType {
    file: File
}

const FileItem: React.FC<filePropsType> = ({file}) => {
  return (
    <div className="file">
        <div className="img">
            <FolderIcon fontSize='large'/>
        </div>
        <div className="name">{file.name}</div>
        <div className="date">20.20.12</div>
        <div className="size">{file.size}</div>
    </div>
  )
}

export default FileItem
