import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function UxPage() {
  const resources = [
    {
      name: 'Nielsen Norman Group – UX Basics',
      url: 'https://www.nngroup.com/articles/definition-user-experience/',
      type: 'Article'
    },
    {
      name: 'Interaction Design Foundation',
      url: 'https://www.interaction-design.org/literature/topics/ux-design',
      type: 'Learning Platform'
    },
    {
      name: 'Don Norman: The Design of Everyday Things',
      url: 'https://www.jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition.html',
      type: 'Book'
    },
    {
      name: 'UX Design Course – Coursera (Google)',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      type: 'Online Course'
    },
    {
      name: 'Laws of UX',
      url: 'https://lawsofux.com/',
      type: 'Reference Guide'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        UX Design
      </Typography>

      <Typography variant="body1" paragraph>
        User Experience (UX) Design focuses on the overall experience a person has when interacting with a product or service.
        It involves understanding user needs, behaviors, and pain points to create intuitive, efficient, and delightful digital experiences.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core UX Principles
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>User-Centered Design:</strong> Always design with the user’s goals, context, and needs in mind.</li>
          <li><strong>Consistency:</strong> Ensure uniformity in UI patterns, visual design, and interactions.</li>
          <li><strong>Feedback:</strong> Provide clear feedback to users for every action they perform.</li>
          <li><strong>Accessibility:</strong> Design for all users, including those with disabilities.</li>
          <li><strong>Simplicity:</strong> Eliminate unnecessary complexity to reduce cognitive load.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn UX Design
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="UX resources table">
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

export default UxPage;
