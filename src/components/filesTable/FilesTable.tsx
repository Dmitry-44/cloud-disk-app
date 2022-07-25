import React from 'react';
import { useAppSelector } from '../../store/hooks/redux';
import FileItem from './file/File';
import './files_table.sass'

export default function FilesTable() {

    const files = useAppSelector(state=>state.file.files).map((file) => <FileItem file={file} key={file._id} />)

    return (
        <div className='files-table'>
            <div className="header">
                <div className="name">Название</div>
                <div className="date">Дата</div>
                <div className="size">Размер</div>
            </div>
            <div className="content">
                {files}
            </div>
        </div>
    )
}
