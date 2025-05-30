import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import {
  FaCube,
  FaParagraph,
  FaHeading,
  FaImage,
  FaLink,
  FaListUl,
  FaTable,
  FaBold,
  FaItalic,
  FaCode,
  FaQuoteRight,
  FaKeyboard,      // Use for input
  FaRegSquare,     // Use for button
  FaSpan,          // NOT available, will remove icon here
  FaFileAlt,       // Use for section/article
  FaArrowCircleDown, // Use for footer (approximation)
  FaArrowCircleUp,  // Use for header (approximation)
  FaBars,          // Use for nav
  FaAlignJustify,  // Another nav-ish icon alternative
} from 'react-icons/fa';

// Since FaSpan doesn't exist, we'll just omit icon for span

const htmlTags = [
  { tag: '<div>', description: 'Defines a division or section in an HTML document.', icon: <FaCube /> },
  { tag: '<p>', description: 'Defines a paragraph.', icon: <FaParagraph /> },
  { tag: '<h1> to <h6>', description: 'Defines HTML headings from level 1 to 6.', icon: <FaHeading /> },
  { tag: '<img>', description: 'Embeds an image.', icon: <FaImage /> },
  { tag: '<a>', description: 'Defines a hyperlink.', icon: <FaLink /> },
  { tag: '<ul>', description: 'Defines an unordered list.', icon: <FaListUl /> },
  { tag: '<ol>', description: 'Defines an ordered list.', icon: <FaListUl /> },
  { tag: '<li>', description: 'Defines a list item.', icon: <FaListUl /> },
  { tag: '<table>', description: 'Defines a table.', icon: <FaTable /> },
  { tag: '<tr>', description: 'Defines a table row.', icon: <FaTable /> },
  { tag: '<td>', description: 'Defines a table cell.', icon: <FaTable /> },
  { tag: '<th>', description: 'Defines a table header cell.', icon: <FaTable /> },
  { tag: '<b>', description: 'Makes text bold.', icon: <FaBold /> },
  { tag: '<i>', description: 'Makes text italic.', icon: <FaItalic /> },
  { tag: '<code>', description: 'Defines a piece of computer code.', icon: <FaCode /> },
  { tag: '<blockquote>', description: 'Defines a section quoted from another source.', icon: <FaQuoteRight /> },
  { tag: '<form>', description: 'Defines an HTML form for user input.', icon: <FaKeyboard /> },
  { tag: '<input>', description: 'Defines an input control.', icon: <FaKeyboard /> },
  { tag: '<button>', description: 'Defines a clickable button.', icon: <FaRegSquare /> },
  { tag: '<span>', description: 'Defines a section in a document inline.', icon: null }, // No icon
  { tag: '<section>', description: 'Defines a section in a document.', icon: <FaFileAlt /> },
  { tag: '<article>', description: 'Defines independent, self-contained content.', icon: <FaFileAlt /> },
  { tag: '<footer>', description: 'Defines a footer for a document or section.', icon: <FaArrowCircleDown /> },
  { tag: '<header>', description: 'Defines a header for a document or section.', icon: <FaArrowCircleUp /> },
  { tag: '<nav>', description: 'Defines navigation links.', icon: <FaBars /> },
];

const HTMLTags = () => (
  <main style={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>Top 25 HTML Tags Reference</Typography>
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Icon</strong></TableCell>
            <TableCell><strong>Tag</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {htmlTags.map(({ tag, description, icon }, i) => (
            <TableRow key={i}>
              <TableCell style={{ width: '5%', fontSize: '1.25rem' }}>{icon || '-'}</TableCell>
              <TableCell style={{ width: '20%', fontFamily: 'monospace' }}>{tag}</TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </main>
);

export default HTMLTags;
