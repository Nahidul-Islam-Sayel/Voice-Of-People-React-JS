import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Navigation.css';
import { Routes, Route, Link } from "react-router-dom";
import { FaComment , FaUserAlt, FaWalking, FaSearchengin , FaArchway , FaChild , FaRegFileAlt} from "react-icons/fa";
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  position="fixed" id="app" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Voice Of People
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <Link to="/">
            <ListItem button key="about">
            <ListItemIcon>
              <FaArchway/>
            </ListItemIcon>
             <ListItemText primary="?????????"></ListItemText>
             
            </ListItem>
            </Link>
            <Link to="/obijug">
            <ListItem button key="about">
            <ListItemIcon>
              <FaChild/>
            </ListItemIcon>
             <ListItemText primary="?????????????????? ????????????"></ListItemText>
             
            </ListItem>
            </Link>
            <Link to="/ajkarkobor">
            <ListItem button key="about">
            <ListItemIcon>
              <FaRegFileAlt/>
            </ListItemIcon>
             <ListItemText primary="??????????????? ?????????"></ListItemText>
             
            </ListItem>
            </Link>
            <Link to="/help">
            <ListItem button key="about">
            <ListItemIcon>
              <FaWalking/>
            </ListItemIcon>
             <ListItemText primary="?????????????????? ????????????"></ListItemText>
             
            </ListItem>
            </Link>
            <Link to="/amaraccount">
            <ListItem button key="about">
            <ListItemIcon>
              <FaUserAlt/>
            </ListItemIcon>
             <ListItemText primary="???????????? ?????????????????????"></ListItemText>
             
            </ListItem>
            </Link>
            <Link to="/jugajug">
            <ListItem button key="about">
            <ListItemIcon>
              <FaSearchengin/>
            </ListItemIcon>
             <ListItemText primary="?????????????????????"></ListItemText>
             
            </ListItem>
            </Link>
      
         <Link to="/about">
            <ListItem button key="about">
            <ListItemIcon>
              <FaComment/>
            </ListItemIcon>
             <ListItemText primary="?????????????????? ????????????????????????"></ListItemText>
             
            </ListItem>
            </Link>
       
        </List>
      </Drawer>
    </Box>
  );
}