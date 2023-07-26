import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Button, Menu, MenuItem, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
const pages = [

    { title: 'Home', link: '/' },
    { title: 'Products', link: '/products' },
    { title: 'Blog', link: '/blog' },
    { title: 'About Us', link: '/About' }
    ,
];

const settings = [
    { title: 'Profile', Icon: PersonIcon, link: '/profile' },
    { title: 'Account', Icon: ManageAccountsIcon, link: '/account' },
    { title: 'Dashboard', Icon: DashboardIcon, link: '/dashboard' },
    // Add more settings as needed
];




// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu} sx={{ mr: 2, display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                        Your Logo
                    </Typography>
                    {/* for maki the reposive bar  */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <Menu anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu} component={Link} to={page.link}>
                                    {page.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* this the code for making the navigation bar and to is sending the randring to the router  */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page.title} component={Link} to={page.link} color="inherit" sx={{ mx: 2 }}>
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.title} component={Link} to={setting.link} onClick={handleCloseUserMenu}>
                                    <setting.Icon style={{marginRight:'10px'}} />
                                    {setting.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
