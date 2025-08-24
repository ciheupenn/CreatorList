import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setFormData({
          name: data.name || "",
          url: data.url || "",
          description: data.description || "",
          imageURL: data.imageURL || "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.url || !formData.description) {
      alert("Please fill in all required fields (name, url, description)");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("creators")
        .update({
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL || null,
        })
        .eq("id", id);

      if (error) {
        console.error("Error updating creator:", error);
        alert("Error updating creator. Please try again.");
      } else {
        navigate(`/creators/${id}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating creator. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${formData.name}? This action cannot be undone.`)) {
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

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "2rem" }}>
        ✏️ Edit Creator
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter creator's name"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            URL *
          </label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://example.com/creator"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what makes this creator awesome..."
            rows="4"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
              resize: "vertical",
            }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Image URL (optional)
          </label>
          <input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              flex: 1,
              backgroundColor: isSubmitting ? "#ccc" : "#28a745",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Updating..." : "Update Creator"}
          </button>
          
          <button
            type="button"
            onClick={() => navigate(`/creators/${id}`)}
            style={{
              flex: 1,
              backgroundColor: "#6c757d",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>

        <div style={{ marginTop: "2rem", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
          <button
            type="button"
            onClick={handleDelete}
            style={{
              width: "100%",
              backgroundColor: "#dc3545",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🗑️ Delete Creator
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCreator;