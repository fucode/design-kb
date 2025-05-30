import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function JsPage() {
  const resources = [
    { name: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', type: 'Documentation' },
    { name: 'JavaScript.info', url: 'https://javascript.info/', type: 'Comprehensive Guide' },
    { name: 'FreeCodeCamp JavaScript', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'Interactive Tutorial' },
    { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/', type: 'Book & Tutorial' },
    { name: 'You Don’t Know JS (book series)', url: 'https://github.com/getify/You-Dont-Know-JS', type: 'Advanced Book Series' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        JavaScript
      </Typography>

      <Typography variant="body1" paragraph>
        JavaScript is a programming language used to create dynamic and interactive effects within web browsers.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core JavaScript Concepts
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Variables & Data Types:</strong> Storing and manipulating data.</li>
          <li><strong>Functions & Scope:</strong> Reusable code blocks and variable visibility.</li>
          <li><strong>DOM Manipulation:</strong> Changing HTML content dynamically.</li>
          <li><strong>Events:</strong> Responding to user actions.</li>
          <li><strong>Asynchronous JavaScript:</strong> Promises, async/await for non-blocking code.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn JavaScript
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="JavaScript resources table">
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

export default JsPage;
