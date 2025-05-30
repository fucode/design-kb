import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  FaHashtag,
  FaStar,
  FaDotCircle,
  FaArrowCircleRight,
  FaCube,
  FaListUl,
  FaCircle,
  FaCode,
  FaUser,
  FaPlusCircle,
} from 'react-icons/fa';

// Top 50 CSS selectors - simplified sample (you can add more)
const cssSelectors = [
  { selector: '*', description: 'Universal selector - selects all elements.', icon: <FaStar /> },
  { selector: 'element', description: 'Type selector - selects all elements of given type.', icon: <FaCube /> },
  { selector: '#id', description: 'ID selector - selects element with specific ID.', icon: <FaHashtag /> },
  { selector: '.class', description: 'Class selector - selects elements with specific class.', icon: <FaDotCircle /> },
  { selector: 'element, element', description: 'Group selector - selects all matching elements.', icon: <FaPlusCircle /> },
  { selector: 'element element', description: 'Descendant selector - selects elements inside another.', icon: <FaArrowCircleRight /> },
  { selector: 'element > element', description: 'Child selector - selects direct children.', icon: <FaArrowCircleRight /> },
  { selector: 'element + element', description: 'Adjacent sibling selector - selects immediately following sibling.', icon: <FaArrowCircleRight /> },
  { selector: 'element ~ element', description: 'General sibling selector - selects siblings after element.', icon: <FaArrowCircleRight /> },
  { selector: ':hover', description: 'Pseudo-class for mouse hover.', icon: <FaUser /> },
  { selector: ':focus', description: 'Pseudo-class for element focus.', icon: <FaUser /> },
  { selector: ':nth-child(n)', description: 'Selects nth child.', icon: <FaListUl /> },
  { selector: ':first-child', description: 'Selects first child.', icon: <FaCircle /> },
  { selector: ':last-child', description: 'Selects last child.', icon: <FaCircle /> },
  { selector: ':not(selector)', description: 'Selects elements NOT matching selector.', icon: <FaCode /> },
  // ... add more until you reach 50 or so
];

// Main CSSSelectors component
const CSSSelectors = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        CSS Selectors Reference
      </Typography>

      <Grid container spacing={2}>
        {cssSelectors.map(({ selector, description, icon }, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {icon} {selector}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default CSSSelectors;
