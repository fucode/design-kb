import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function CssPage() {
  const resources = [
    { name: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'Documentation' },
    { name: 'CSS-Tricks', url: 'https://css-tricks.com/', type: 'Articles & Tutorials' },
    { name: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/', type: 'Tutorial' },
    { name: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/', type: 'Interactive Game' },
    { name: 'Grid Garden', url: 'https://cssgridgarden.com/', type: 'Interactive Game' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        CSS
      </Typography>

      <Typography variant="body1" paragraph>
        CSS (Cascading Style Sheets) is used to style and layout web pages — for example, changing colors, fonts, and positioning elements.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core CSS Concepts
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Selectors:</strong> Target HTML elements to apply styles.</li>
          <li><strong>Box Model:</strong> Defines padding, border, margin, and content area.</li>
          <li><strong>Flexbox & Grid:</strong> Powerful layout systems for responsive design.</li>
          <li><strong>Media Queries:</strong> Enable responsive design for different devices.</li>
          <li><strong>Specificity & Cascade:</strong> Rules that determine which styles apply.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn CSS
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="CSS resources table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Resource</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources.map((res, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link href={res.url} target="_blank" rel="noopener noreferrer">
                      {res.name}
                    </Link>
                  </TableCell>
                  <TableCell>{res.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default CssPage;
