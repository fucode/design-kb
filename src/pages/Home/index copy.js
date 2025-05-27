
// src/pages/Home/index.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DesignCard from '../../components/DesignCard.js';
import ThreeDCard from '../../components/3DCard.js';
import UXImage from '../../images/UX.png';
import UIImage from '../../images/UI.png';

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

      {/* Original Design Cards */}
      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 2 }}
        alignItems="stretch"
        justifyContent="center"
        sx={{
          maxWidth: { xs: '100%', sm: 856, md: 856 }, // 2x420px + 16px
          mx: 'auto',
          mb: 4, // Space below first section
        }}
      >
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <DesignCard
            title="UX Design"
            description="Explore User Experience design principles, methods, and case studies to create user-centered solutions."
            to="/ux"
            image={UXImage}
            imageAlt="Wireframe sketch for UX design"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <DesignCard
            title="UI Design"
            description="Discover User Interface design trends, tools, and best practices for visually appealing and functional interfaces."
            to="/ui"
            image={UIImage}
            imageAlt="Colorful UI interface mockup"
          />
        </Grid>
      </Grid>

      {/* Dummy 3D Cards */}
      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 2 }}
        alignItems="stretch"
        justifyContent="center"
        sx={{
          maxWidth: { xs: '100%', sm: 856, md: 856 },
          mx: 'auto',
        }}
      >
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <ThreeDCard
            title="Design Systems"
            description="Learn about building scalable design systems for consistent and efficient UI development."
            to="/design-systems"
            image={UXImage} // Reuse UX image for dummy card
            imageAlt="Design system components"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <ThreeDCard
            title="Prototyping"
            description="Discover tools and techniques for creating interactive prototypes to test and refine designs."
            to="/prototyping"
            image={UIImage} // Reuse UI image for dummy card
            imageAlt="Interactive prototype mockup"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;