import React, { useState } from 'react';
import { uploadFile } from '../../store/action-creations/file';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import FileItem from './file/File';
import './files_table.sass'


export default function FilesTable() {

    const files = useAppSelector(state=>state.file.files).map((file) => <FileItem file={file} key={file._id} />)
    const [isDragStart, setDragStart] = useState(false)
    const {currentDir} = useAppSelector(state=>state.file)
    const dispatch = useAppDispatch()

    function dragOverHandler(e: React.DragEvent){
        e.preventDefault()
        e.stopPropagation()
		setDragStart(true)
	}
	function dragLeaveHandler(e: React.DragEvent){
        e.preventDefault()
        e.stopPropagation()
		setDragStart(false)
	}
    function dragDropHandler(e: React.DragEvent){
        console.log('drop')
        e.preventDefault()
        e.stopPropagation()
        console.log('e', e)
        let files = e.dataTransfer.files
        console.log('fileees', files)
        if(files.length > 0) {
            for(let i=0; i<files.length;i++) {
                dispatch(uploadFile(files[i], currentDir))
            }
        }
        setDragStart(false) 
    }

    return (
        <div className='files-table'>
            <div className="header">
                <div className="name">Name</div>
                <div className="date">Date</div>
                <div className="size">Size</div>
            </div>
            <div className={`content ${isDragStart ? 'drag-area-open' : ''}`} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler}>
                { files.length > 0 ? files : <div className="file file-empty"><div className="name">Empty</div></div> }
                <div className={`drag-area isDragStart ${isDragStart ? 'drag-area-show' : ''}`} onDrop={dragDropHandler}>
                    <p className='text'>drag<br/>& <br/>drop<br/>here</p>
                </div>
            </div>
        </div>
    )
}
