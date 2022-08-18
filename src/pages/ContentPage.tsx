import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FilesTable from '../components/filesTable/FilesTable'
import { createDir, getFiles, popFromStack, setCurrentDir, uploadFile } from '../store/action-creations/file'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'
import CreateNewFolderSharpIcon from '@mui/icons-material/CreateNewFolderSharp';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'

export default function ContentPage() {
	const navigator = useNavigate()
	const dispatch = useAppDispatch()
	const currentDir = useAppSelector( state => state.file.currentDir)
	const dirStack = useAppSelector(state => state.file.dirStack)
	const isAuth = useAppSelector(state => state.user.isAuth)
	
	useEffect(()=> {
		console.log('check auth in page')
        if(!isAuth){
            navigator('/login')
        }
    },[])
	useEffect(() => {
		if(!isAuth)return;
		dispatch(getFiles(currentDir || ''))
	},[currentDir])

	const [dialogIsOpen, setDialogOpen] = useState(false)
	const [newHolderName, setNewFolderName] = useState('')

	const createDirHandler = async() => {
		let file = {
			name: newHolderName,
			type: 'dir',
			parent: currentDir || ''
		}
		await dispatch(createDir(file))
		setNewFolderName('')
		closeDialog()
	}
	const openDialog = () => {
		setDialogOpen(true)
	}
	const closeDialog= () => {
		setDialogOpen(false)
	}
	const clickBackHandler = () => {
		const backDirId = dirStack[dirStack.length - 1]
        dispatch(setCurrentDir(backDirId))
		dispatch(popFromStack())
	}

	const uploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if(!event.target.files)return;
		const fileList = event.target.files
		const files = []
		for(let i=0;i<fileList.length; i++) {
			files.push(fileList[i])
			dispatch(uploadFile(fileList[i], currentDir))
		}
		console.log('files', files)
	}	

	return (
		<div>
			<div className="buttons" style={{marginTop: '20px', marginBottom: '20px'}}>
				<Button variant="outlined" style={{marginRight: '10px'}} onClick={openDialog}>
					Create folder
					<CreateNewFolderSharpIcon style={{marginLeft: '5px'}} />
				</Button>
				<Button variant="contained" component="label" style={{marginRight: '10px'}}>
					Upload
					<input hidden accept="*" multiple type="file" onChange={uploadHandler} />
				</Button>
				{currentDir && <Button variant="outlined" onClick={clickBackHandler}>
					Return
				</Button>
				}
			</div>
			<div style={{marginTop: '20px'}} >
				<FilesTable/>
			</div>
			<Dialog open={dialogIsOpen} onClose={closeDialog}>
				<DialogTitle>Creating new folder</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Text new folder name
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Folder name"
						type="text"
						fullWidth
						variant="outlined"
						value={newHolderName}
						onChange={(event) => setNewFolderName(event.target.value)} 
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeDialog}>Cancel</Button>
					<Button onClick={createDirHandler}>Create</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
