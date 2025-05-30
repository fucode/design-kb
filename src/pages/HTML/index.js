import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function HtmlPage() {
  const resources = [
    { name: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'Documentation' },
    { name: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'Tutorial' },
    { name: 'HTML Living Standard', url: 'https://html.spec.whatwg.org/', type: 'Specification' },
    { name: 'HTML Dog', url: 'https://www.htmldog.com/', type: 'Tutorial & Guide' },
    { name: 'FreeCodeCamp HTML Guide', url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/', type: 'Interactive Tutorial' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        HTML
      </Typography>

      <Typography variant="body1" paragraph>
        HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures the content and layout of a website.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core HTML Concepts
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Elements & Tags:</strong> The building blocks of HTML used to define content.</li>
          <li><strong>Attributes:</strong> Provide additional information about elements.</li>
          <li><strong>Semantic HTML:</strong> Using meaningful tags to improve accessibility and SEO.</li>
          <li><strong>Forms & Inputs:</strong> Gather user data through various input types.</li>
          <li><strong>Multimedia:</strong> Embedding images, videos, and audio in pages.</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Resources to Learn HTML
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="HTML resources table">
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

export default HtmlPage;
