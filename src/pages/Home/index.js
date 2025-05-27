import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DesignCard from '../../components/DesignCard';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">

        Welcome to the Product Design KB
      </Typography>
      <Typography variant="body1" align="center">
        This knowledge base contains resources, best practices, and guidelines to help you build better products.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <DesignCard
            title="UX Design"
            description="Explore User Experience design principles, methods, and case studies."
            to="/ux"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DesignCard
            title="UI Design"
            description="Discover User Interface design trends, tools, and best practices."
            to="/ui"
          />
        </Grid>
        {/* Add more cards here */}
      </Grid>
    </Container>
  );
}

export default Home;
