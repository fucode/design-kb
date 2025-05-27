import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const ThreeDCard = ({ title, description, image, imageAlt, to }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1}
      glareEnable
      glareMaxOpacity={0}
      glareColor="#ffffff"
      glarePosition="all"
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 420, md: 420 },
          minHeight: { xs: 320, sm: 360, md: 380 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: theme => theme.palette.grey[100],
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          },
          p: { xs: 1.5, sm: 2, md: 2 },
          boxSizing: "border-box",
        }}
      >
        <CardMedia
          component="img"
          height={{ xs: 140, sm: 160, md: 180 }}
          image={image}
          alt={imageAlt || `${title} illustration`}
          sx={{
            objectFit: "cover",
            borderRadius: "12px 12px 0 0",
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            overflow: "hidden",
            px: 2,
            py: 1,
          }}
        >
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
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 1.5,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.9rem" },
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "flex-end",
            padding: { xs: 1.5, sm: 2, md: 2 },
          }}
        >
          <Button
            component={RouterLink}
            to={to}
            size="small"
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              px: { xs: 2, sm: 3, md: 3 },
              py: 0.75,
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default ThreeDCard;
