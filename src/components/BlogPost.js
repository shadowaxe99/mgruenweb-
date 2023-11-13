import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
  return (
    <article className='blog-post'>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`}>Read More</Link>
    </article>
  );
};

export default BlogPost;
