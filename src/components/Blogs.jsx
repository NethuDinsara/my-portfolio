import React from 'react';
import postImg from '../assets/images/postiq.png'
import ppxImg from '../assets/images/ppx.png'
import indusImg from '../assets/images/itIndus.png'
import contentImg from '../assets/images/contents.png'

function Blogs() {
  const blogPosts = [
    {
      title: 'API Awareness',
      link: 'https://medium.com/@neth.hettihewa/a-journey-into-api-awareness-insights-from-ieee-computer-society-of-iit-4212f71f14be',
      description: 'Hey, fellow learners! I recently had the pleasure of joining an API awareness session hosted by the IEEE Computer Society of IIT. Let me share some key insights from this enlightening experience.',
      image: postImg, // Placeholder image
    },
    {
      title: 'Alternatives for ChatGpt',
      link: 'https://medium.com/@neth.hettihewa/an-better-alternative-for-chat-gpt-gpt-3-5-3d5c77e9a016',
      description: 'An better alternative for Chat-Gpt(GPT 3.5)',
      image: ppxImg, // Placeholder image
    },
    {
      title: 'Dynamics of the IT Industry',
      link: 'https://medium.com/@neth.hettihewa/exploring-the-dynamics-of-the-it-industry-a-sri-lankan-perspective-d0ad5ab5e41d',
      description: 'In today’s digital age, the Information Technology (IT) industry stands as a beacon of innovation and progress, shaping the world we live in. From its humble beginnings in the 1950s to its current status as one of the fastest-growing sectors globally, the IT industry has undergone a remarkable evolution, revolutionizing the way we work, communicate, and interact.',
      image: indusImg, // Placeholder image
    },
    {
      title: 'The Best AI Tools for Content Creation in 2025',
      link: 'https://medium.com/@neth.hettihewa/the-best-ai-tools-for-content-creation-in-2025-b07ea5513732',
      description: 'AI is transforming the way we create content, making it faster, smarter, and more engaging. Whether you’re a blogger, marketer, or creator, these tools can help you craft incredible content with ease.',
      image: contentImg, // Placeholder image
    },
    {
      title: 'The Best AI Tools for Content Creation in 2025',
      link: 'https://medium.com/@neth.hettihewa/the-best-ai-tools-for-content-creation-in-2025-b07ea5513732',
      description: 'AI is transforming the way we create content, making it faster, smarter, and more engaging. Whether you’re a blogger, marketer, or creator, these tools can help you craft incredible content with ease.',
      image: contentImg, // Placeholder image
    },
    // Add more blog posts with image paths
  ];

  return (
    <div className="blogs-section">
      <h2>Latest Thoughts & Articles</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            {post.image && <img src={post.image} alt={post.title} className="blog-image" />}
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;