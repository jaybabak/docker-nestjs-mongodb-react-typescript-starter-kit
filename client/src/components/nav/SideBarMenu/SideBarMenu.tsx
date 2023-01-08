import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, IconButton, Typography, ListItemButton, ListItemIcon } from "@mui/material";
import { Home, Menu, InsertComment } from '@mui/icons-material';
import { ThemeModeSwitcher } from "../../global";
import { Auth } from '../../../context/Auth/Auth';

function SideBarMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { authenticated } = React.useContext(Auth);

  return (
    <React.Fragment>
      {/* Menu Icon */}
      <Toolbar variant="dense">
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to='/'>ONEBOX</Link>
        </Typography>
      </Toolbar>

      {/* Sidebar App Drawer */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="/contact">
              <ListItemButton>
                <ListItemIcon>
                  <InsertComment/>
                </ListItemIcon>
                <ListItemText>
                  Contact
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          
          {authenticated ? (null) :
            <React.Fragment>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <Link to="/register">
                  <ListItemButton>
                    <ListItemIcon>
                      <InsertComment/>
                    </ListItemIcon>
                    <ListItemText>
                      Register
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <Link to="/login">
                  <ListItemButton>
                    <ListItemIcon>
                      <InsertComment/>
                    </ListItemIcon>
                    <ListItemText>
                      Sign in
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            </React.Fragment>
          }

        </List>
        <ThemeModeSwitcher/>
      </Drawer>
    </React.Fragment>
  );
}

export default SideBarMenu;