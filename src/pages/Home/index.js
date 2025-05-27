import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DesignCard from '../../components/DesignCard';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">

        Faraz Uddin Design Knowledge Base
      </Typography>
      <Typography variant="body1" align="center" variant="h5">
        This is my personal Design KB built with React
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
