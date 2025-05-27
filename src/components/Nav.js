// src/components/Nav.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'UX', to: '/UX' },
    { text: 'UI', to: '/UI' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Design KB
          </Typography>
          <div style={{ display: 'flex', gap: '10px', display: 'none', sm: 'flex' }}>
            {navItems.map((item) => (
              <Button key={item.text} color="inherit" component={Link} to={item.to}>
                {item.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.to} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Nav;
