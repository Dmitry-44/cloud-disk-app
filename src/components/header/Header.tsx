import { FC } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";

const Header: FC = () => {

    return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container>
					<Toolbar variant="dense">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<div style={{marginLeft:'auto'}}>
							<Button href='/registration' color="inherit">Sign up</Button>
							<Button href='/signin' color="inherit">Sign in</Button>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
    )
}

export default Header
