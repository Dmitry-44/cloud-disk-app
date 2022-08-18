import { FC } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { logout } from "../../store/action-creations/user";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './header.css'

const Header: FC = () => {

	const userState = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const navigator = useNavigate()

	const logoutUser = () => {
		dispatch( logout() ).then(()=> navigator('/'))
	}

    return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container>
					<Toolbar variant="dense">
							<NavLink aria-label="menu" to='/' className={'nav-link main-logo'}>
								CLOUD-DISK
							</NavLink>
						{userState.isAuth && 
							<NavLink to='/content' className={'nav-link'}>
								<Button color="inherit">
									My disk
								</Button>
							</NavLink>
						}

						<div style={{marginLeft:'auto'}}>
							{ !userState.isAuth && <NavLink to='/registration' className={'nav-link'}><Button color='inherit'>Register</Button></NavLink>}
							{ !userState.isAuth && <NavLink to='/login' className={'nav-link'}><Button color='inherit'>Login</Button></NavLink>}
							{ userState.isAuth && <Button color='inherit' onClick={logoutUser}>Logout</Button>}
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
    )
}

export default Header
