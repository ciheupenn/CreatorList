import React from "react";
import { Link } from "react-router-dom";

function CreatorCard({ creator }) {
  return (
    <article
      className="creator-card"
      style={{
        maxWidth: "300px",
        margin: "1rem",
      }}
    >
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "var(--border-radius)",
            marginBottom: "0.5rem",
          }}
        />
      )}

      <h2 style={{ margin: "0.5rem 0" }}>{creator.name}</h2>

      <p style={{ marginBottom: "1rem" }}>{creator.description}</p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          role="button"
          className="outline"
          style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
        >
          Visit Creator
        </a>
        
        <Link 
          to={`/creators/${creator.id}`}
          role="button"
          style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
        >
          View
        </Link>
        
        <Link 
          to={`/creators/${creator.id}/edit`}
          role="button"
          className="secondary"
          style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
        >
          Edit
        </Link>
      </div>
    </article>
  );
}

export default CreatorCard;
