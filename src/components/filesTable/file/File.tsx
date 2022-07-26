import React from 'react'
import { File } from '../../../types/file'
import FolderIcon from '@mui/icons-material/Folder';
import './file.sass'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { pushToStack, setCurrentDir } from '../../../store/action-creations/file';

interface filePropsType {
    file: File
}

const FileItem: React.FC<filePropsType> = ({file}) => {
    const dispatch = useAppDispatch()
    const currentDir = useAppSelector(state=>state.file.currentDir)
    const user = useAppSelector(state=>state.user.user)

    const openDirHandler = () => {
        if(file.type != 'dir')return;
        dispatch(pushToStack(currentDir || ''))
        dispatch(setCurrentDir(file._id))
    }

    return (
        <div className="file" onClick={()=> openDirHandler()}>
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
