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
						<Button>
							<NavLink aria-label="menu" to='/'>CLOUD-DISK</NavLink>
						</Button>
						{userState.isAuth && 
						<Button color="inherit">
							<NavLink to='/content'>
								My disk
							</NavLink>
						</Button>
						}

						<div style={{marginLeft:'auto'}}>
							{ !userState.isAuth && <Button color='inherit'><NavLink to='/registration' color="inherit">Register</NavLink></Button>}
							{ !userState.isAuth && <Button color='inherit'><NavLink to='/login' color="inherit">Login</NavLink></Button>}
							{ userState.isAuth && <Button ><NavLink to='/logout' onClick={logoutUser} >Logout</NavLink></Button>}
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
    )
}

export default Header
