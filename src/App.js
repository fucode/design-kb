import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Home from './pages/Home';
import HtmlPage from './pages/HTML';
import CssPage from './pages/CSS';
import JsPage from './pages/JavaScript';
import ReactPage from './pages/React';
import UiPage from './pages/UI';
import UxPage from './pages/UX';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openDesign, setOpenDesign] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const frontEndLinks = [
    { label: 'HTML', path: '/html' },
    { label: 'CSS', path: '/css' },
    { label: 'JavaScript', path: '/javascript' },
    { label: 'React', path: '/react' },
  ];

  const designLinks = [
    { label: 'UX', path: '/ux' },
    { label: 'UI', path: '/ui' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // Prevent closing drawer when clicking dropdown headers
      onClick={(e) => e.stopPropagation()}
    >
      <List>
        {/* Front-End Dev dropdown header */}
        <ListItem button onClick={() => setOpenFrontEnd(!openFrontEnd)}>
          <ListItemText primary="Front-End Dev" />
          {openFrontEnd ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {/* Front-End Dev links */}
        <Collapse in={openFrontEnd} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {frontEndLinks.map(({ label, path }) => (
              <ListItem
                button
                key={label}
                component={RouterLink}
                to={path}
                onClick={toggleDrawer(false)} // Close drawer on link click
                sx={{ pl: 4 }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        {/* Design dropdown header */}
        <ListItem button onClick={() => setOpenDesign(!openDesign)}>
          <ListItemText primary="Design" />
          {openDesign ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {/* Design links */}
        <Collapse in={openDesign} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {designLinks.map(({ label, path }) => (
              <ListItem
                button
                key={label}
                component={RouterLink}
                to={path}
                onClick={toggleDrawer(false)}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {/* App Title linking to home */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { cursor: 'pointer' },
            }}
          >
            FU-Knowledge Base
          </Typography>

          {/* Mobile hamburger menu */}
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            // Desktop buttons
            <>
              {frontEndLinks.map(({ label, path }) => (
                <Button
                  key={label}
                  color="inherit"
                  component={RouterLink}
                  to={path}
                >
                  {label}
                </Button>
              ))}
              {designLinks.map(({ label, path }) => (
                <Button
                  key={label}
                  color="inherit"
                  component={RouterLink}
                  to={path}
                >
                  {label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/javascript" element={<JsPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/ux" element={<UxPage />} />
        <Route path="/ui" element={<UiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
