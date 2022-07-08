import { FC } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from "@mui/system";
import { useAppSelector } from "../../store/hooks/redux";

const Header: FC = () => {

	const userState = useAppSelector( state => state.user )

    return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container>
					<Toolbar variant="dense">
						<IconButton
							size="small"
							edge="start"
							color="inherit"
							aria-label="menu"
							href='/'
							sx={{ mr: 2 }}
						>
							CLOUD-DISK
						</IconButton>
						<div style={{marginLeft:'auto'}}>
							{ !userState.isAuth && <Button href='/registration' color="inherit">Sign up</Button>}
							{ !userState.isAuth && <Button href='/signin' color="inherit">Sign in</Button>}
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
    )
}

export default Header
