// src/components/DesignCard.js
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DesignCard = ({ title, description, to, image, imageAlt }) => {
  return (
    <Card
      sx={{
        width: '100%', // Fill Grid item
        maxWidth: {
          xs: '100%', // Full width on mobile
          sm: 420, // Wider for tablet
          md: 420, // Wider for large screens
        },
        minHeight: {
          xs: 320, // Compact for mobile
          sm: 360, // Balanced for tablet
          md: 380, // Balanced for large screens
        },
        height: '100%', // Stretch to match tallest card
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        padding: {
          xs: 1.5, // 12px padding on mobile
          sm: 2, // 16px on tablet
          md: 2, // 16px on large
        },
        boxSizing: 'border-box',
        backgroundColor: 'background.paper',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: {
            xs: 140, // Smaller image on mobile
            sm: 160, // Medium for tablet
            md: 180, // Larger for large screens
          },
          objectFit: 'cover',
          borderRadius: '4px 4px 0 0',
        }}
        image={image}
        alt={imageAlt}
      />
      <CardContent
        sx={{
          flexGrow: 1, // Stretch to fill space
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            fontSize: {
              xs: '1.1rem',
              sm: '1.2rem',
              md: '1.25rem',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.5,
            fontSize: {
              xs: '0.85rem',
              sm: '0.9rem',
              md: '0.9rem',
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3, // Limit to 3 lines
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end',
          padding: {
            xs: 1.5, // 12px on mobile
            sm: 2, // 16px on tablet
            md: 2, // 16px on large
          },
        }}
      >
        <Button
          component={RouterLink}
          to={to}
          size="medium"
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            padding: {
              xs: '5px 10px',
              sm: '6px 12px',
              md: '6px 12px',
            },
          }}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DesignCard;