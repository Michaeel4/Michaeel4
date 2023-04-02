import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Card className="project-card gray">
        <CardContent>
          <img src={image} alt={title} className="project-image" />
          <Typography className="press-start project-title" variant="h5">
            {title}
          </Typography>
          <Typography className="project-description" variant="body2">
            {description}
          </Typography>
          <div className="project-links">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            
            <button onClick={togglePopup}>More Info</button>
          </div>
        </CardContent>
      </Card>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">

            <button className="close-button" onClick={togglePopup}>
              &times;
            </button>
            <img src={image} alt={title} className="project-image-popup" />
            <h2>Project Information</h2>
            <p>Some more information about the project...</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
