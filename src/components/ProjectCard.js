import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image }) => {  return (
    <Card className="project-card gray">
        
      <CardContent>
      <img src={image} alt={title} className="project-image" />
        <Typography className="press-start project-title" variant="h5">
          {title}
        </Typography>
        <Typography className="project-description" variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
