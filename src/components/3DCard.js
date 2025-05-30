// Import necessary libraries and components
import React from "react";
import {
  Card,           // MUI Card component for layout
  CardContent,    // Section to hold the main content
  CardActions,    // Section to hold actions like buttons
  Typography,     // For text styling
  Button,         // Button component from MUI
  CardMedia,      // For displaying images
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // React Router link component renamed as RouterLink
import Tilt from "react-parallax-tilt"; // 3D tilt effect wrapper

// Functional component that accepts props to display a customizable 3D card
const ThreeDCard = ({ title, description, image, imageAlt, to }) => {
  return (
    // Apply 3D tilt effect on hover using react-parallax-tilt
    <Tilt
      tiltMaxAngleX={15}     // Maximum tilt angle on X-axis
      tiltMaxAngleY={15}     // Maximum tilt angle on Y-axis
      scale={1}              // Scale of the card on hover (1 = no scaling)
      glareEnable            // Enable light glare
      glareMaxOpacity={0}    // Glare is enabled but fully transparent (can be adjusted)
      glareColor="#ffffff"   // Glare color (white)
      glarePosition="all"    // Glare appears from all directions
    >
      {/* Main card component with MUI styling */}
      <Card
        sx={{
          width: "100%",                      // Take full width of parent
          maxWidth: { xs: "100%", sm: 420, md: 420 },  // Max width depending on screen size
          minHeight: { xs: 320, sm: 360, md: 380 },    // Min height responsive
          height: "100%",                    // Full height
          display: "flex",                   // Use flexbox layout
          flexDirection: "column",           // Layout children vertically
          justifyContent: "space-between",   // Space out content and actions
          bgcolor: theme => theme.palette.grey[100], // Light grey background
          border: "1px solid rgba(0, 0, 0, 0.1)",     // Light border
          borderRadius: "12px",              // Rounded corners
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",     // Subtle shadow
          transition: "box-shadow 0.3s",      // Smooth hover transition
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",  // Stronger shadow on hover
          },
          p: { xs: 1.5, sm: 2, md: 2 },        // Internal padding responsive
          boxSizing: "border-box",            // Include padding/border in width/height
        }}
      >
        {/* Image at the top of the card */}
        <CardMedia
          component="img"                    // Render image tag
          height={{ xs: 140, sm: 160, md: 180 }} // Responsive height
          image={image}                      // Source of image
          alt={imageAlt || `${title} illustration`} // Alt text for accessibility
          sx={{
            objectFit: "cover",              // Image covers container
            borderRadius: "12px 12px 0 0",   // Rounded corners only at the top
          }}
        />

        {/* Content section containing title and description */}
        <CardContent
          sx={{
            flexGrow: 1,                     // Take up available vertical space
            display: "flex",                 // Use flex layout
            flexDirection: "column",         // Stack title and description
            gap: 1,                          // Gap between items
            overflow: "hidden",              // Hide overflow
            px: 2, py: 1,                    // Padding inside the content
          }}
        >
          {/* Card title */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
            }}
          >
            {title}
          </Typography>

          {/* Description text */}
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.5,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.9rem" },
              overflow: "hidden",                   // Hide overflow text
              textOverflow: "ellipsis",             // Add ellipsis if too long
              display: "-webkit-box",               // Webkit hack for line clamp
              WebkitLineClamp: 3,                   // Show only 3 lines max
              WebkitBoxOrient: "vertical",          // Vertical layout
            }}
          >
            {description}
          </Typography>
        </CardContent>

        {/* Bottom action section with "Learn More" button */}
        <CardActions
          sx={{
            justifyContent: "flex-end",              // Align button to the right
            padding: { xs: 1.5, sm: 2, md: 2 },       // Padding responsive
          }}
        >
          <Button
            component={RouterLink}                   // Link to the route
            to={to}                                  // Target path
            size="small"
            variant="contained"                      // Contained button style
            color="primary"
            sx={{
              textTransform: "none",                 // Keep button text as-is
              px: { xs: 2, sm: 3, md: 3 },
              py: 0.75,
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
            aria-label={`Learn more about ${title}`} // Accessibility label
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default ThreeDCard; // Export the component for use elsewhere
