import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("name");
      
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Loading creators...</h1>
      </div>
    );
  }

  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>🌟 Creatorverse 🌟</h1>
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          Discover amazing content creators worth following
        </p>
        <Link 
          to="/creators/new"
          role="button"
          style={{ marginBottom: "2rem", display: "inline-block" }}
        >
          ➕ Add New Creator
        </Link>
      </header>

      {creators.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ color: "#666" }}>No content creators found</h2>
          <p style={{ color: "#999" }}>
            Be the first to add a creator to the Creatorverse!
          </p>
        </div>
      ) : (
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            justifyItems: "center",
          }}
        >
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ShowCreators;