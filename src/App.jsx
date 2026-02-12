import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

function App() {
  return (
    <>
  
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/post/:id" element={<BlogPost />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;