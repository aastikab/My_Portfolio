// src/DailyBlogs.js
import React, { useState } from 'react';

const DailyBlogs = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, date: '2024-09-20', title: 'My First Blog', content: 'This is my first blog entry!' },
    // Add more initial blogs here if needed
  ]);
  
  const [newBlog, setNewBlog] = useState({ title: '', content: '', date: '' });

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.content) {
      setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
      setNewBlog({ title: '', content: '', date: '' }); // Clear the form
    }
  };

  return (
    <div className="portfolio-section">
      <h2 className="section-heading">Daily Blogs</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          name="title" 
          value={newBlog.title} 
          onChange={handleChange} 
          placeholder="Blog Title" 
          required 
          className="border rounded p-2 w-full mb-2"
        />
        <textarea 
          name="content" 
          value={newBlog.content} 
          onChange={handleChange} 
          placeholder="Blog Content" 
          required 
          className="border rounded p-2 w-full mb-2"
        />
        <button type="submit" className="button">Publish Blog</button>
      </form>

      {blogs.map(blog => (
        <div key={blog.id} className="blog-content">
          <h3 className="blog-title">{blog.title} - {blog.date}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DailyBlogs;
