import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FilesTable from '../components/filesTable/FilesTable'
import { getFiles } from '../store/action-creations/file'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import CreateNewFolderSharpIcon from '@mui/icons-material/CreateNewFolderSharp';

export default function ContentPage() {
	const navigator = useNavigate()
	const dispatch = useAppDispatch()
	const currentDir = useAppSelector( state => state.file.currentDir)
	const files = useAppSelector( state => state.file.files)
	const {isAuth} = useAppSelector(state => state.user)
	const checkAuth = () => {
		if(!isAuth) {
			navigator('/')
		}
	}
	useEffect(checkAuth, [isAuth])
	useEffect(() => {
		dispatch(getFiles())
	},[])



	return (
		<div>
			<div className="buttons" style={{marginTop: '20px', marginBottom: '20px'}}>
				<Button variant="outlined">
					Создать папку
					<CreateNewFolderSharpIcon style={{marginLeft: '5px'}} />
				</Button>
				{currentDir && <Button variant="outlined" style={{marginRight: '10px'}}>
					Назад
				</Button>
				}
			</div>
			<div style={{marginTop: '20px'}}>
				<FilesTable/>
			</div>
		</div>
	)
}
