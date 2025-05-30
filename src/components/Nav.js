// src/components/Nav.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Nav() {
  // State for drawer open/close (mobile)
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State for mobile drawer dropdowns open/close
  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openDesign, setOpenDesign] = useState(false);

  // State for desktop dropdown menus anchor elements (null means closed)
  const [anchorElFrontEnd, setAnchorElFrontEnd] = useState(null);
  const [anchorElDesign, setAnchorElDesign] = useState(null);

  // Navigation items grouped by category
  const frontEndLinks = [
    { text: 'HTML', to: '/HTML' },
    { text: 'CSS', to: '/CSS' },
    { text: 'JavaScript', to: '/JavaScript' },
    { text: 'React', to: '/React' },
  ];

  const designLinks = [
    { text: 'UX', to: '/UX' },
    { text: 'UI', to: '/UI' },
  ];

  // Toggle drawer open/close
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Open desktop Front-End dropdown menu
  const handleFrontEndMenuOpen = (event) => {
    setAnchorElFrontEnd(event.currentTarget);
  };

  // Close desktop Front-End dropdown menu
  const handleFrontEndMenuClose = () => {
    setAnchorElFrontEnd(null);
  };

  // Open desktop Design dropdown menu
  const handleDesignMenuOpen = (event) => {
    setAnchorElDesign(event.currentTarget);
  };

  // Close desktop Design dropdown menu
  const handleDesignMenuClose = () => {
    setAnchorElDesign(null);
  };

  return (
    <>
      {/* Top AppBar */}
      <AppBar position="static">
        <Toolbar>
          {/* Mobile hamburger icon, visible only on small screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: 'none' } }} // hide on sm and above
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Design KB
          </Typography>

          {/* Desktop navigation buttons and dropdowns, hidden on small screens */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'nowrap' }}>
            {/* Front-End Dev dropdown trigger button */}
            <Button
              color="inherit"
              onClick={handleFrontEndMenuOpen}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }} // show only on sm+
              aria-controls={Boolean(anchorElFrontEnd) ? 'frontend-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElFrontEnd) ? 'true' : undefined}
            >
              Front-End Dev
            </Button>

            {/* Front-End Dev dropdown menu */}
            <Menu
              id="frontend-menu"
              anchorEl={anchorElFrontEnd}
              open={Boolean(anchorElFrontEnd)}
              onClose={handleFrontEndMenuClose}
              MenuListProps={{ 'aria-labelledby': 'frontend-button' }}
              keepMounted
            >
              {frontEndLinks.map(({ text, to }) => (
                <MenuItem
                  key={text}
                  component={Link}
                  to={to}
                  onClick={handleFrontEndMenuClose}
                >
                  {text}
                </MenuItem>
              ))}
            </Menu>

            {/* Design dropdown trigger button */}
            <Button
              color="inherit"
              onClick={handleDesignMenuOpen}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }} // show only on sm+
              aria-controls={Boolean(anchorElDesign) ? 'design-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElDesign) ? 'true' : undefined}
            >
              Design
            </Button>

            {/* Design dropdown menu */}
            <Menu
              id="design-menu"
              anchorEl={anchorElDesign}
              open={Boolean(anchorElDesign)}
              onClose={handleDesignMenuClose}
              MenuListProps={{ 'aria-labelledby': 'design-button' }}
              keepMounted
            >
              {designLinks.map(({ text, to }) => (
                <MenuItem
                  key={text}
                  component={Link}
                  to={to}
                  onClick={handleDesignMenuClose}
                >
                  {text}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {/* Front-End Dev expandable list in drawer */}
          <ListItem button onClick={() => setOpenFrontEnd(!openFrontEnd)}>
            <ListItemText primary="Front-End Dev" />
            {openFrontEnd ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFrontEnd} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {frontEndLinks.map(({ text, to }) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={to}
                  onClick={toggleDrawer(false)} // close drawer on link click
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Design expandable list in drawer */}
          <ListItem button onClick={() => setOpenDesign(!openDesign)}>
            <ListItemText primary="Design" />
            {openDesign ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDesign} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {designLinks.map(({ text, to }) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={to}
                  onClick={toggleDrawer(false)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
}

export default Nav;
