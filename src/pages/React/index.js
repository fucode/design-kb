import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function ReactPage() {
  const resources = [
    { name: 'React Official Docs', url: 'https://reactjs.org/docs/getting-started.html', type: 'Documentation' },
    { name: 'React Tutorial - Scrimba', url: 'https://scrimba.com/learn/learnreact', type: 'Interactive Tutorial' },
    { name: 'FreeCodeCamp React Guide', url: 'https://www.freecodecamp.org/learn/front-end-libraries/react/', type: 'Interactive Tutorial' },
    { name: 'React Patterns', url: 'https://reactpatterns.com/', type: 'Design Patterns & Best Practices' },
    { name: 'Awesome React', url: 'https://github.com/enaqx/awesome-react', type: 'Curated List' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        React
      </Typography>

      <Typography variant="body1" paragraph>
        React is a JavaScript library for building user interfaces, especially single-page applications, by creating reusable UI components.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core React Concepts
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Components:</strong> Reusable pieces of UI.</li>
          <li><strong>JSX:</strong> JavaScript syntax extension for writing HTML inside JavaScript.</li>
          <li><strong>State & Props:</strong> Manage data within and between components.</li>
          <li><strong>Hooks:</strong> Functions like useState and useEffect for managing lifecycle and state.</li>
          <li><strong>Virtual DOM:</strong> Efficient UI updates.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn React
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="React resources table">
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

export default ReactPage;
