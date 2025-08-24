import React from "react";
import { Link } from "react-router-dom";

function CreatorCard({ creator }) {
  return (
    <div
      className="creator-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        maxWidth: "300px",
      }}
    >
      <img
        src={creator.imageURL}
        alt={creator.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "0.5rem",
        }}
      />

      <h2>{creator.name}</h2>

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Creator
      </a>
      
    </div>
  );
}

export default CreatorCard;
