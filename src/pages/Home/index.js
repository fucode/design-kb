// src/pages/Home/index.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
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
            to="/UX"
            image={UXImage} // Reuse UX image for dummy card
            imageAlt="Design system components"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
          <ThreeDCard
            title="Prototyping"
            description="Discover tools and techniques for creating interactive prototypes to test and refine designs."
            to="/UI"
            image={UIImage} // Reuse UI image for dummy card
            imageAlt="Interactive prototype mockup"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;