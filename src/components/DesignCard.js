// src/components/DesignCard.js
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DesignCard = ({ title, description, to }) => {
  return (
    <Card
      sx={{
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={to}
          size="small"
          color="primary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DesignCard;
