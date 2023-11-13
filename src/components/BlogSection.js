import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import { fetchBlogPosts } from '../api/blogApi';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then(posts => setBlogPosts(posts));
  }, []);

  return (
    <section className='blog-section'>
      <h2>Latest Blog Posts</h2>
      <div className='blog-grid'>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
