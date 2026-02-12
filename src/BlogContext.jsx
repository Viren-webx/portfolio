import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("blogPosts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content
    };
    setPosts([...posts, newPost]);
  };

  const getPost = id => posts.find(p => p.id === Number(id));

  return (
    <BlogContext.Provider value={{ posts, addPost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
