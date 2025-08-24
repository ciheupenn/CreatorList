import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        .insert([{
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL || null,
        }]);

      if (error) {
        console.error("Error adding creator:", error);
        alert("Error adding creator. Please try again.");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding creator. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container" style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        ✨ Add New Creator ✨
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter creator's name"
            required
          />
        </div>

        <div>
          <label htmlFor="url">
            URL *
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://example.com/creator"
            required
          />
        </div>

        <div>
          <label htmlFor="description">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what makes this creator awesome..."
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="imageURL">
            Image URL (optional)
          </label>
          <input
            type="url"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ flex: 1 }}
          >
            {isSubmitting ? "Adding..." : "Add Creator"}
          </button>
          
          <button
            type="button"
            onClick={() => navigate("/")}
            className="secondary"
            style={{ flex: 1 }}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddCreator;