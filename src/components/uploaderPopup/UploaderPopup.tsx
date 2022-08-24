import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './uploader_popup.sass'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import UploaderFile from './UploaderFile';
import { deactivateLoader } from '../../store/action-creations/uploaderFile';

export default function UploaderPopup() {

    const {isActive, files} = useAppSelector(state => state.uploader)
    const dispatch = useAppDispatch()

    const closeLoader = () => {
        dispatch(deactivateLoader())
    }

    return (
        <div className={`uploaded-popup ${isActive ? 'show' : ''}`}>
            <header className="header">
                <p className='title'>Загрузки</p>
                <IconButton aria-label="delete" size="small" onClick={closeLoader}>
                    <CloseIcon/>
                </IconButton>
            </header>
            <div className="body">
                <ul className='files-list'>
                    { files.map((file) => <li key={file.id}><UploaderFile file={file} /></li> )}
                </ul>
            </div>
        </div>
    )
}
