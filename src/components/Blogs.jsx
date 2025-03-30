import React from 'react';

function Blogs() {
  const blogPosts = [
    {
      title: 'The Power of React Hooks',
      link: '#',
      description: 'An in-depth exploration of React Hooks and how they can simplify state management and side effects in functional components.',
    },
    {
      title: 'Mastering CSS Flexbox and Grid',
      link: '#',
      description: 'A comprehensive guide to using CSS Flexbox and Grid for creating modern and responsive layouts.',
    },
    {
      title: 'Building RESTful APIs with Node.js and Express',
      link: '#',
      description: 'Learn how to build robust and scalable RESTful APIs using Node.js and the Express framework.',
    },
  ];

  return (
    <div className="blogs-section">
      <h2>Blogs</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Blogs;