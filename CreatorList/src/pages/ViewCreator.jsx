import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
        if (error.code === "PGRST116") {
          // Creator not found
          navigate("/");
        }
      } else {
        setCreator(data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${creator.name}? This action cannot be undone.`)) {
      try {
        const { error } = await supabase
          .from("creators")
          .delete()
          .eq("id", id);

        if (error) {
          console.error("Error deleting creator:", error);
          alert("Error deleting creator. Please try again.");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error deleting creator. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Loading creator...</h1>
      </div>
    );
  }

  if (!creator) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Creator not found</h1>
        <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
      <div style={{ marginBottom: "2rem" }}>
        <Link 
          to="/" 
          role="button"
          className="outline secondary"
          style={{ fontSize: "1rem" }}
        >
          ← Back to Home
        </Link>
      </div>

      <article>
        {creator.imageURL && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <img
              src={creator.imageURL}
              alt={creator.name}
              style={{
                maxWidth: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "var(--border-radius)",
              }}
            />
          </div>
        )}

        <h1 style={{ 
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "2.5rem",
        }}>
          {creator.name}
        </h1>

        <p style={{ 
          fontSize: "1.2rem",
          lineHeight: "1.6",
          marginBottom: "2rem",
          textAlign: "center",
        }}>
          {creator.description}
        </p>

        <div style={{ 
          display: "flex", 
          gap: "1rem", 
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            🔗 Visit Creator
          </a>

          <Link
            to={`/creators/${creator.id}/edit`}
            role="button"
            className="secondary"
          >
            ✏️ Edit Creator
          </Link>

          <button
            onClick={handleDelete}
            className="contrast"
          >
            🗑️ Delete Creator
          </button>
        </div>
      </article>
    </main>
  );
}

export default ViewCreator;