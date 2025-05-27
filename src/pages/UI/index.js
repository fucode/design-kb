import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function UiPage() {
  const resources = [
    {
      name: 'Material UI',
      url: 'https://mui.com/',
      type: 'UI Framework'
    },
    {
      name: 'Figma',
      url: 'https://www.figma.com/',
      type: 'Design Tool'
    },
    {
      name: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      type: 'Tutorials & Articles'
    },
    {
      name: 'Smashing Magazine',
      url: 'https://www.smashingmagazine.com/',
      type: 'Design Magazine'
    },
    {
      name: 'Awwwards',
      url: 'https://www.awwwards.com/',
      type: 'Design Inspiration'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        UI Design
      </Typography>

      <Typography variant="body1" paragraph>
        User Interface (UI) Design focuses on the look, feel, and interactivity of a product.
        It ensures that users can navigate, interact, and engage with the digital interface smoothly and pleasantly.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core UI Principles
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Visual Hierarchy:</strong> Guide users' attention using size, color, and layout.</li>
          <li><strong>Consistency:</strong> Maintain uniform styles and behaviors throughout the product.</li>
          <li><strong>Responsiveness:</strong> Design for various devices and screen sizes.</li>
          <li><strong>Accessibility:</strong> Make interfaces usable by people with disabilities.</li>
          <li><strong>Feedback:</strong> Provide clear visual responses to user actions.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn UI Design
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="UI resources table">
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

export default UiPage;
