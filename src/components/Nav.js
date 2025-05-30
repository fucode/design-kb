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
  Box,
  ListItemIcon, // Added for potential future use if icons are needed in list items
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import { Link } from 'react-router-dom'; // Assuming this will be used. If not, it can be removed.
// For demonstration without react-router-dom, Link components can be simple 'a' tags or Buttons
// For the Link component to work, you need to wrap your app in a Router

// Mock Link component if react-router-dom is not set up in this isolated example
const Link = ({ to, children, style, ...props }) => (
  <a href={to} style={{ ...style, textDecoration: 'none', color: 'inherit' }} {...props}>
    {children}
  </a>
);


function Nav() {
  // State for drawer open/close on mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State for drawer collapsible menus on mobile
  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openHtmlSubMenu, setOpenHtmlSubMenu] = useState(false);
  const [openCssSubMenu, setOpenCssSubMenu] = useState(false);
  const [openDesign, setOpenDesign] = useState(false);

  // Anchor elements for desktop dropdown menus
  const [anchorElFrontEnd, setAnchorElFrontEnd] = useState(null);
  const [anchorElHtml, setAnchorElHtml] = useState(null);
  const [anchorElCss, setAnchorElCss] = useState(null);
  const [anchorElDesign, setAnchorElDesign] = useState(null);

  // Sub-menu links
  const htmlSubLinks = [
    { text: 'Overview', to: '/html' },
    { text: 'HTML Tags', to: '/html/tags' },
  ];
  const cssSubLinks = [
    { text: 'Overview', to: '/css' },
    { text: 'CSS Selectors', to: '/css/selectors' },
  ];

  // Front-End main sections (HTML and CSS have submenus)
  const frontEndLinks = [
    { text: 'HTML', subMenu: htmlSubLinks },
    { text: 'CSS', subMenu: cssSubLinks },
    { text: 'JavaScript', to: '/javascript' },
    { text: 'React', to: '/react' },
  ];

  // Design links
  const designLinks = [
    { text: 'UX', to: '/ux' },
    { text: 'UI', to: '/ui' },
  ];

  // Toggle drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Handlers for desktop dropdown menus
  const handleFrontEndMenuOpen = (event) => {
    setAnchorElFrontEnd(event.currentTarget);
  };
  const handleFrontEndMenuClose = () => {
    setAnchorElFrontEnd(null);
  };

  const handleHtmlMenuOpen = (event) => {
    setAnchorElHtml(event.currentTarget);
  };
  const handleHtmlMenuClose = () => {
    setAnchorElHtml(null);
    // Optionally close parent menus if a sub-item is clicked
    // setAnchorElFrontEnd(null);
  };

  const handleCssMenuOpen = (event) => {
    setAnchorElCss(event.currentTarget);
  };
  const handleCssMenuClose = () => {
    setAnchorElCss(null);
    // Optionally close parent menus
    // setAnchorElFrontEnd(null);
  };

  const handleDesignMenuOpen = (event) => {
    setAnchorElDesign(event.currentTarget);
  };
  const handleDesignMenuClose = () => {
    setAnchorElDesign(null);
  };

  // Helper to close all menus, useful for navigation
  const closeAllMenusAndDrawer = () => {
    setAnchorElFrontEnd(null);
    setAnchorElHtml(null);
    setAnchorElCss(null);
    setAnchorElDesign(null);
    setDrawerOpen(false);
  };


  // Drawer list content
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)} // Close drawer on any click inside (optional)
      // onKeyDown={toggleDrawer(false)} // Close drawer on Esc (optional)
    >
      <List>
        {/* Home Link at the top of the drawer */}
        <ListItem
            button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
        >
            <ListItemText primary="Home" />
        </ListItem>

        {/* Front-End Dev expandable list */}
        <ListItem button onClick={() => setOpenFrontEnd(!openFrontEnd)}>
          <ListItemText primary="Front-End Dev" />
          {openFrontEnd ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openFrontEnd} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* HTML expandable submenu */}
            <ListItem button onClick={() => setOpenHtmlSubMenu(!openHtmlSubMenu)} sx={{ pl: 4 }}>
              <ListItemText primary="HTML" />
              {openHtmlSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openHtmlSubMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {htmlSubLinks.map(({ text, to }) => (
                  <ListItem
                    button
                    key={text}
                    component={Link}
                    to={to}
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 8 }}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* CSS expandable submenu */}
            <ListItem button onClick={() => setOpenCssSubMenu(!openCssSubMenu)} sx={{ pl: 4 }}>
              <ListItemText primary="CSS" />
              {openCssSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCssSubMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {cssSubLinks.map(({ text, to }) => (
                  <ListItem
                    button
                    key={text}
                    component={Link}
                    to={to}
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 8 }}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Other Front-End links (JS, React) */}
            {frontEndLinks
              .filter(({ subMenu }) => !subMenu) // Filter out items that have subMenus as they are handled above
              .map(({ text, to }) => (
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

        {/* Design expandable list */}
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
    </Box>
  );


  return (
    <>
      {/* AppBar with Toolbar */}
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Brand title - takes available space, pushes hamburger to right */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
          >
            FU-Knowledge Base
          </Typography>

          {/* Desktop navigation buttons (hidden on xs) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}> {/* Reduced gap for potentially more items */}
            {/* Front-End dropdown */}
            <Button
              color="inherit"
              aria-controls={anchorElFrontEnd ? 'frontend-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElFrontEnd)}
              onClick={handleFrontEndMenuOpen}
              onMouseOver={handleFrontEndMenuOpen} // Optional: open on hover
            >
              Front-End Dev
            </Button>
            <Menu
              id="frontend-menu"
              anchorEl={anchorElFrontEnd}
              open={Boolean(anchorElFrontEnd)}
              onClose={handleFrontEndMenuClose}
              MenuListProps={{ onMouseLeave: handleFrontEndMenuClose }} // Optional: close on mouse leave
              keepMounted
            >
              {/* Render Front-End links */}
              {frontEndLinks.map(({ text, to, subMenu }) => {
                if (subMenu) {
                  // Handling for HTML and CSS submenus
                  const isHtml = text === 'HTML';
                  const anchorElSub = isHtml ? anchorElHtml : anchorElCss;
                  const handleSubMenuOpen = isHtml ? handleHtmlMenuOpen : handleCssMenuOpen;
                  const handleSubMenuClose = isHtml ? handleHtmlMenuClose : handleCssMenuClose;
                  const subMenuId = isHtml ? 'html-submenu' : 'css-submenu';

                  return (
                    <div key={text}>
                      <MenuItem
                        aria-controls={anchorElSub ? subMenuId : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(anchorElSub)}
                        onClick={handleSubMenuOpen}
                        onMouseOver={handleSubMenuOpen} // Optional: open submenu on hover
                      >
                        {text} <ExpandMore sx={{ ml: 'auto', fontSize: '1rem', transform: Boolean(anchorElSub) ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </MenuItem>
                      <Menu
                        id={subMenuId}
                        anchorEl={anchorElSub}
                        open={Boolean(anchorElSub)}
                        onClose={handleSubMenuClose}
                        MenuListProps={{ onMouseLeave: handleSubMenuClose }} // Optional: close on mouse leave
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        keepMounted
                      >
                        {subMenu.map(({ text: subText, to: subTo }) => (
                          <MenuItem
                            key={subText}
                            component={Link}
                            to={subTo}
                            onClick={() => {
                              handleSubMenuClose();
                              handleFrontEndMenuClose(); // Close main dropdown as well
                            }}
                          >
                            {subText}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  );
                } else {
                  // Direct links like JavaScript, React
                  return (
                    <MenuItem
                      key={text}
                      component={Link}
                      to={to}
                      onClick={() => {
                        handleFrontEndMenuClose();
                      }}
                    >
                      {text}
                    </MenuItem>
                  );
                }
              })}
            </Menu>

            {/* Design dropdown */}
            <Button
              color="inherit"
              aria-controls={anchorElDesign ? 'design-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElDesign)}
              onClick={handleDesignMenuOpen}
              onMouseOver={handleDesignMenuOpen} // Optional: open on hover
            >
              Design
            </Button>
            <Menu
              id="design-menu"
              anchorEl={anchorElDesign}
              open={Boolean(anchorElDesign)}
              onClose={handleDesignMenuClose}
              MenuListProps={{ onMouseLeave: handleDesignMenuClose }} // Optional: close on mouse leave
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
          </Box>

          {/* Hamburger Icon - on the right, shown only on mobile (xs screens) */}
          <IconButton
            edge="end" // Helps align the icon properly at the edge of the Toolbar's content area
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: 'inline-flex', sm: 'none' }, // Show on xs, hide on sm and up. 'inline-flex' is IconButton's default.
              // ml: 2, // Original: This added a left margin. Removing it to test default spacing.
                       // If you need more space between the title and icon, you can add it back or adjust.
              zIndex: 1300 // Ensures it’s above other elements like a drawer if it overlaps.
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer menu - slides from right */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box'
          }
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
}

export default Nav;
