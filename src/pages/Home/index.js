// src/pages/Home/index.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ThreeDCard from '../../components/3DCard.js';

// Import images for each topic (ensure these paths and files exist)
import UXImage from '../../images/UX.png';
import UIImage from '../../images/UI.png';
import HTMLImage from '../../images/HTML.png';
import CSSImage from '../../images/CSS.png';
import JSImage from '../../images/JS.png';
import ReactImage from '../../images/React.png';

function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        px: { xs: 1.5, sm: 2, md: 2 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
        }}
      >
        Faraz Uddin Knowledge Base
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{
          mb: 4,
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
        }}
      >
        This is my personal knowledge base built with React
      </Typography>

      {/* Card Grid */}
      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 2 }}
        justifyContent="center"
        sx={{
          maxWidth: { xs: '100%', sm: 856, md: 856 },
          mx: 'auto',
        }}
      >
        {[
          { title: 'HTML', description: 'Basics of HTML5', to: '/html', image: HTMLImage, imageAlt: 'HTML5 logo' },
          { title: 'CSS', description: 'Styling with CSS', to: '/css', image: CSSImage, imageAlt: 'CSS3 logo' },
          { title: 'JavaScript', description: 'Learn JS Fundamentals', to: '/js', image: JSImage, imageAlt: 'JavaScript logo' },
          { title: 'React', description: 'Build with React', to: '/react', image: ReactImage, imageAlt: 'React logo' },
          { title: 'UX', description: 'Learn about UX', to: '/ux', image: UXImage, imageAlt: 'Design system components' },
          { title: 'UI', description: 'Learn about UI', to: '/ui', image: UIImage, imageAlt: 'Interactive prototype mockup' },
        ].map(({ title, description, to, image, imageAlt }) => (
          <Grid item key={title} xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
            <ThreeDCard
              title={title}
              description={description}
              to={to}
              image={image}
              imageAlt={imageAlt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
