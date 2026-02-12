import { useState } from "react";
import { useBlog } from "./UserContext/BlogContext.jsx";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { addPost } = useBlog();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    navigate("/blog");
  };

  return (
      
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Your content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit">Publish</button>
    </form>
  );
}
