// src/pages/Home/index.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DesignCard from '../../components/DesignCard.js';
import UXImage from '../../images/UX.png'; // Import UX image
import UIImage from '../../images/UI.png'; // Import UI image

function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        px: { xs: 1.5, sm: 2, md: 2 }, // Responsive padding
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
        }}
      >
        Faraz Uddin Design Knowledge Base
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{
          mb: 4,
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
        }}
      >
        This is my personal Design KB built with React
      </Typography>

      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 2 }} // 12px mobile, 16px tablet/large
        alignItems="stretch" // Equal card heights
        justifyContent="center" // Center cards horizontally
        sx={{
          maxWidth: { xs: '100%', sm: 856, md: 856 }, // ~2x420px + 16px gap
          mx: 'auto', // Center grid container
        }}
      >
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <DesignCard
            title="UX Design"
            description="Explore User Experience design principles, methods, and case studies to create user-centered solutions."
            to="/ux"
            image={UXImage} // Use imported UX image
            imageAlt="Wireframe sketch for UX design"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <DesignCard
            title="UI Design"
            description="Discover User Interface design trends, tools, and best practices for visually appealing and functional interfaces."
            to="/ui"
            image={UIImage} // Use imported UI image
            imageAlt="Colorful UI interface mockup"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;