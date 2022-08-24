import React from 'react'
import { IFile } from '../../../types/file'
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import './file.sass'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { downloadFile, pushToStack, setCurrentDir, deleteFile } from '../../../store/action-creations/file';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';

interface filePropsType {
    file: IFile
}

const FileItem: React.FC<filePropsType> = ({file}) => {
    const dispatch = useAppDispatch()
    const currentDir = useAppSelector(state=>state.file.currentDir)
    const user = useAppSelector(state=>state.user.user)

    const openDirHandler = () => {
        if(file.type != 'dir')return;
        console.log('aaaaa')
        dispatch(pushToStack(currentDir || ''))
        dispatch(setCurrentDir(file._id))
    }

    const download = () => {
        downloadFile(file)
    }
    const deleteHandler = () => {
        dispatch(deleteFile(file))
    }

    return (
        <div className={`file ${file.type === 'dir' ? 'file-dir' : ''}` } onClick={()=> openDirHandler()}>
            <div className="img">
                { file.type === 'dir' ? <FolderIcon fontSize='large'/> :  <InsertDriveFileIcon fontSize='large'/> }
            </div>
            <div className="name">{file.name}</div>
            <div className="date">20.20.12</div>
            <div className="size">{file.size}</div>
            <div className="actions_block">
            <Button variant="contained" startIcon={<FileDownloadIcon />} onClick={()=> download()}>
                Download
            </Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={deleteHandler}>
                Delete
            </Button>
            </div>
        </div>
    )
}

export default FileItem
